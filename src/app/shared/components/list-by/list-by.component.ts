import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-list-by',
  templateUrl: './list-by.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListByComponent {
  @Input() orderIcon!: IconDefinition;
  @Output() listByChange = new EventEmitter<string>();
  @Output() orderClick = new EventEmitter<void>();

  changeListBy(event: Event): void {
    this.listByChange.emit((event.target as HTMLSelectElement).value);
  }

  toggleOrder(): void {
    this.orderClick.emit();
  }
}
