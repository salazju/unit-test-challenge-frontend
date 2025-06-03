import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CATEGORIES } from 'src/app/core/constants/item.constants';
import { Item } from 'src/app/core/interfaces/item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDetailsComponent {
  @Input() item!: Item | null;
  @Input() quantity!: number;
  @Output() onQuantityChange = new EventEmitter<string>();
  @Output() onAddToCart = new EventEmitter<Item>();

  categories(): string {
    if (!this.item) {
      return '';
    }

    return this.item.category.map((category) => CATEGORIES[category]).join(', ');
  }

  updateQuantity(type: string): void {
    this.onQuantityChange.emit(type);
  }

  addItemToCart(item: Item): void {
    this.onAddToCart.emit(item);
  }
}
