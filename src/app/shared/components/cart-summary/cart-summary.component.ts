import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CartItem } from 'src/app/core/interfaces/item';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSummaryComponent {
  @Input() cartItems!: CartItem[] | null;

  totalPrice(): number {
    if (!this.cartItems) {
      return 0;
    }

    return this.cartItems?.reduce((prev, cartItem) => {
      return prev + cartItem.price * cartItem.quantity;
    }, 0);
  }
}
