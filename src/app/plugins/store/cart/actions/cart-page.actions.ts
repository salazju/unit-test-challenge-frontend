import { createAction, props } from '@ngrx/store';

import { CartItem, CartItemQuantityUpdate } from 'src/app/core/interfaces/item';

export const addItemToCart = createAction('[Cart Page] Add Item To Cart', props<{ cartItem: CartItem }>());

export const updateCartItem = createAction('[Cart Page] Update Cart Item', props<{ cartItem: CartItem }>());

export const clearCart = createAction('[Cart Page] Clear Cart');

export const updateCartItemQuantity = createAction(
  '[Cart Page] Update Cart Item Quantity',
  props<{ quantityUpdate: CartItemQuantityUpdate }>()
);
