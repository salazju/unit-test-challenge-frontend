import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxListComponent {
  @Input() formGroup!: FormGroup;
  @Input() label!: string;
  @Input() name!: string;
  @Input() checkboxItems!: { [key: string]: string }[];
  @Output() change = new EventEmitter<{ inputEl: HTMLInputElement; value: string }>();

  onCheckChange(event: Event, value: string): void {
    this.change.emit({ inputEl: <HTMLInputElement>event.target, value });
  }
}
