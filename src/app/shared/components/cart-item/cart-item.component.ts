import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem, CartItemQuantityUpdate } from 'src/app/core/interfaces/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  @Output() onUpdateQuantity = new EventEmitter<CartItemQuantityUpdate>();

  updateCartItemQuantity(cartItem: CartItem, type: string): void {
    this.onUpdateQuantity.emit({ cartItem, type });
  }
}
