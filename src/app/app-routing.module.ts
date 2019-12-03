import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/guards/auth.guard';


const routes: Routes = [
  {
    path: 'signin',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./shared/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: '',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./pages/pages.module').then(module => module.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
