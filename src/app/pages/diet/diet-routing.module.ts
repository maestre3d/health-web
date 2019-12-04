import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DietComponent } from './components/diet.component';


const routes: Routes = [
  {
    path: '',
    component: DietComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietRoutingModule { }
