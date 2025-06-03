import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-select',
  templateUrl: './quantity-select.component.html',
  styleUrls: ['./quantity-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantitySelectComponent {
  @Input() quantity!: number;
  @Output() change = new EventEmitter<string>();

  incrementQuantity(): void {
    this.change.emit('increment');
  }

  decrementQuantity(): void {
    this.quantity > 1 && this.change.emit('decrement');
  }
}
