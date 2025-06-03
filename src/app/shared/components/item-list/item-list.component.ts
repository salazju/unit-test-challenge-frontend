import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Item, ItemsByCategory } from 'src/app/core/interfaces/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent {
  @Input() items!: Item[] | null;
  @Input() listBy!: string | null;
  @Input() categories!: string[];
  @Input() itemsByCategory!: ItemsByCategory | null;
}
