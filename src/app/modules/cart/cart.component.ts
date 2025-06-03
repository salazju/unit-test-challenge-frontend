import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectAllCartItems, State } from 'src/app/plugins/store/cart';
import { CartItem, CartItemQuantityUpdate } from 'src/app/core/interfaces/item';
import { CartPageActions } from 'src/app/plugins/store/cart/actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems$: Observable<CartItem[]>;

  constructor(private store: Store<State>) {
    this.cartItems$ = this.store.select(selectAllCartItems);
  }

  updateCartItemQuantity(quantityUpdate: CartItemQuantityUpdate): void {
    this.store.dispatch(CartPageActions.updateCartItemQuantity({ quantityUpdate }));
  }

  checkOut(): void {
    const isCheckedOut = confirm('Do you want to check out all items in the cart?');

    if (isCheckedOut) {
      this.store.dispatch(CartPageActions.clearCart());
      alert('Successfully checked out!');
    }
  }
}
