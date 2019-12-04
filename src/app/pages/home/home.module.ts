import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { MaterialModule } from 'src/app/common/modules/material.module';
import { MissingFieldPipe } from 'src/app/common/pipes/missing-field.pipe';


@NgModule({
  declarations: [HomeComponent, MissingFieldPipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
