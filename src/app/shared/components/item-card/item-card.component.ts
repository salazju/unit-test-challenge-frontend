import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from 'src/app/core/interfaces/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCardComponent {
  @Input() item!: Item;
}
