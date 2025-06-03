import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddItemFormComponent {
  @Input() formGroup!: FormGroup;
  @Input() categoriesList!: { [key: string]: string }[];
  @Output() submitForm = new EventEmitter<void>();
  @Output() checkboxChange = new EventEmitter<{ inputEl: HTMLInputElement; value: string }>();

  submitAddItem(): void {
    this.submitForm.emit();
  }

  onCheckChange(x: { inputEl: HTMLInputElement; value: string }): void {
    this.checkboxChange.emit(x);
  }
}
