import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { homePageReducer } from 'src/app/plugins/store/home/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from 'src/app/plugins/store/home/home.effects';

const appRoutes: Routes = [
  {
    path: '',
    component: AddComponent,
  },
];

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes),
    StoreModule.forFeature('home', homePageReducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
})
export class AddModule {}
