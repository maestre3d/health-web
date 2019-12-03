import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    const isAuth = this.authService.getCredentials() ? true : false;

    // No auth
    if (!isAuth && next.routeConfig.path !== 'signin') {
      this.router.navigate(['/signin'], { queryParams: { redirectUri: state.url} });
      return false;
    } else if (isAuth && next.routeConfig.path !== 'signin') {
      return true;
    }  else if (isAuth && next.routeConfig.path === 'signin') {
      this.router.navigate(['/']);
      return true;
    } else {
      return true;
    }
  }

}
