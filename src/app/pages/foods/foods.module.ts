import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsRoutingModule } from './foods-routing.module';
import { FoodsComponent } from './components/foods.component';
import { MaterialModule } from 'src/app/common/modules/material.module';


@NgModule({
  declarations: [FoodsComponent],
  imports: [
    CommonModule,
    FoodsRoutingModule,
    MaterialModule
  ]
})
export class FoodsModule { }
