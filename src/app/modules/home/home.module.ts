import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { homePageReducer } from 'src/app/plugins/store/home/home.reducer';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemDetailsShellComponent } from './item-details/item-details-shell.component';
import { HomeEffects } from 'src/app/plugins/store/home/home.effects';
import { cartReducer } from 'src/app/plugins/store/cart/cart.reducer';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':id',
    component: ItemDetailsShellComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(homeRoutes),
    StoreModule.forFeature('home', homePageReducer),
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
  declarations: [HomeComponent, ItemDetailsComponent, ItemDetailsShellComponent],
})
export class HomeModule {}
