import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './root/pages.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'diet',
        loadChildren: () => import('./diet/diet.module').then(m => m.DietModule)
      },
      {
        path: 'foods',
        loadChildren: () => import('./foods/foods.module').then(m => m.FoodsModule)
      },
      {
        path: '**',
        loadChildren: () => import('../shared/not-found/not-found.module').then(m => m.NotFoundModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
