import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './root/pages.component';
import { MaterialModule } from '../common/modules/material.module';
import { CompleteProfileComponent } from './shared/complete-profile/complete-profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProfileOptionsComponent } from './shared/profile-options/profile-options.component';
import { AuthInterceptor } from '../common/interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [PagesComponent, CompleteProfileComponent, NavbarComponent, ProfileOptionsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ],
  entryComponents: [
    CompleteProfileComponent,
    ProfileOptionsComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class PagesModule { }
