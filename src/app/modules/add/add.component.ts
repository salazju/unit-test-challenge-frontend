import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { CATEGORIES } from 'src/app/core/constants/item.constants';
import { State } from 'src/app/plugins/store/home';
import { HomePageActions } from 'src/app/plugins/store/home/actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  categoriesList = Object.keys(CATEGORIES)
    .map((category) => {
      return {
        label: CATEGORIES[category],
        value: category,
      };
    })
    .filter((obj) => obj.value !== 'uncategorized');
  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<State>) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      description: '',
      price: ['', [Validators.required, Validators.pattern(/^\d*\.\d{2}$/)]],
      category: [[]],
      image: '',
      dateAdded: '',
    });
  }

  submit(): void {
    this.itemForm.markAllAsTouched();
    if (this.itemForm.valid) {
      this.itemForm.patchValue({ dateAdded: new Date().toISOString() });
      if (this.itemForm.get('category')?.value.length === 0) {
        this.itemForm.patchValue({ category: ['uncategorized'] });
      }
      this.store.dispatch(HomePageActions.createItem({ item: this.itemForm.value }));
      alert('Item created successfully!');
      this.itemForm.reset();
    }
  }

  onCheckChange(x: { inputEl: HTMLInputElement; value: string }): void {
    const currentCategory: string[] = this.itemForm.get('category')?.value;
    if (x.inputEl?.checked) {
      this.itemForm.patchValue({ category: [...currentCategory, x.value] });
    } else {
      this.itemForm.patchValue({ category: currentCategory.filter((category) => category !== x.value) });
    }
  }
}
