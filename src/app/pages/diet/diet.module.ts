import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietRoutingModule } from './diet-routing.module';
import { DietComponent } from './components/diet.component';
import { MaterialModule } from 'src/app/common/modules/material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/common/interceptors/auth.interceptor';
import { DietHelper } from 'src/app/common/helpers/diet.helper';


@NgModule({
  declarations: [DietComponent],
  imports: [
    CommonModule,
    DietRoutingModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    DietHelper
  ]
})
export class DietModule { }
