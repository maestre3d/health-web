import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodsComponent } from './components/foods.component';


const routes: Routes = [
  {
    path: '',
    component: FoodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsRoutingModule { }
