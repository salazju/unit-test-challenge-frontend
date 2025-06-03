import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('src/app/modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'add-item',
        loadChildren: () => import('src/app/modules/add/add.module').then((m) => m.AddModule),
      },
      {
        path: 'my-cart',
        loadChildren: () => import('src/app/modules/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
