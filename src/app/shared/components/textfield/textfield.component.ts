import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
})
export class TextfieldComponent {
  @Input() formGroup!: FormGroup;
  @Input() label!: string;
  @Input() name!: string;
  @Input() required?: boolean;
  @Input() prefix?: string;
  @Input() pattern: string = '';
  @Input() patternErrorMessage?: string;

  errorMessage = '';

  hasRequiredError(): boolean | undefined {
    return this.formGroup.get(this.name)?.touched && this.formGroup.get(this.name)?.errors?.['required'];
  }

  hasPatternError(): boolean | undefined {
    return this.formGroup.get(this.name)?.touched && this.formGroup.get(this.name)?.errors?.['pattern'];
  }
}
