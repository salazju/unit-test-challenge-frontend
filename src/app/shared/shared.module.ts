import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ListByComponent } from './components/list-by/list-by.component';
import { CategoryPipe } from './pipes/category.pipe';
import { QuantitySelectComponent } from './components/quantity-select/quantity-select.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemFormComponent } from './components/add-item-form/add-item-form.component';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { CheckboxListComponent } from './components/checkbox-list/checkbox-list.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [
    SidenavComponent,
    ItemCardComponent,
    ItemListComponent,
    ListByComponent,
    CategoryPipe,
    QuantitySelectComponent,
    CartItemComponent,
    CartSummaryComponent,
    AddItemFormComponent,
    TextfieldComponent,
    CheckboxListComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SidenavComponent,
    ItemListComponent,
    ListByComponent,
    QuantitySelectComponent,
    CartItemComponent,
    CartSummaryComponent,
    AddItemFormComponent,
  ],
})
export class SharedModule {}
