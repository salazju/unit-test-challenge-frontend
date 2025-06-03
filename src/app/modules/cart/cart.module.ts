import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from 'src/app/plugins/store/cart/cart.reducer';

const appRoutes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(appRoutes), StoreModule.forFeature('cart', cartReducer)],
})
export class CartModule {}
