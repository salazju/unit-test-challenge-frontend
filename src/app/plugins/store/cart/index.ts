import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../app.state';
import { CartState } from './cart.reducer';

export interface State extends AppState.State {
  cart: CartState;
}

const selectCartFeatureState = createFeatureSelector<CartState>('cart');

export const selectAllCartItems = createSelector(selectCartFeatureState, (state) => state.items);
