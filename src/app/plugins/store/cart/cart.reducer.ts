import { createReducer, on } from '@ngrx/store';
import { CartItem } from 'src/app/core/interfaces/item';
import { CartPageActions } from './actions';

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(CartPageActions.addItemToCart, (state, action): CartState => {
    const itemMap: { [key: number]: CartItem } = {};
    state.items.forEach((cartItem) => (itemMap[cartItem.id] = cartItem));

    if (Boolean(itemMap[action.cartItem.id])) {
      itemMap[action.cartItem.id] = {
        ...itemMap[action.cartItem.id],
        quantity: itemMap[action.cartItem.id].quantity + action.cartItem.quantity,
      };
    } else {
      itemMap[action.cartItem.id] = action.cartItem;
    }

    return {
      ...state,
      items: Object.values(itemMap),
    };
  }),
  on(CartPageActions.updateCartItem, (state, action): CartState => {
    const index = state.items.findIndex((cartItem) => cartItem.id === action.cartItem.id);
    const updatedItems = [...state.items];
    updatedItems[index] = action.cartItem;

    return {
      ...state,
      items: updatedItems,
    };
  }),
  on(CartPageActions.clearCart, (state): CartState => {
    return {
      ...state,
      items: [],
    };
  }),
  on(CartPageActions.updateCartItemQuantity, (state, action): CartState => {
    const index = state.items.findIndex((cartItem) => cartItem.id === action.quantityUpdate.cartItem.id);
    const updatedItems = [...state.items];
    updatedItems[index] = {
      ...action.quantityUpdate.cartItem,
      quantity:
        action.quantityUpdate.type === 'increment'
          ? action.quantityUpdate.cartItem.quantity + 1
          : action.quantityUpdate.cartItem.quantity - 1,
    };

    return {
      ...state,
      items: updatedItems,
    };
  })
);
