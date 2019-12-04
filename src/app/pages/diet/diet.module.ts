import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietRoutingModule } from './diet-routing.module';
import { DietComponent } from './components/diet.component';
import { MaterialModule } from 'src/app/common/modules/material.module';
import { DietHelper } from 'src/app/common/helpers/diet.helper';


@NgModule({
  declarations: [DietComponent],
  imports: [
    CommonModule,
    DietRoutingModule,
    MaterialModule
  ],
  providers: [
    DietHelper
  ]
})
export class DietModule { }
