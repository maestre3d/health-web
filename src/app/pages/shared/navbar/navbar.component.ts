import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { User } from 'src/app/common/models/user.model';
import { AuthService } from 'src/app/common/services/auth.service';
import { ProfileOptionsComponent } from '../profile-options/profile-options.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private subject$ = new Subject<void>();
  profile: User;
  isHome = false;
  isProfile = false;

  constructor(private profileSheet: MatBottomSheet, private router: Router, private authService: AuthService) {
    this.isHome = (this.router.url === '/') ? true : false;
    this.isProfile = (this.router.url.startsWith('/account')) ? true : false;
    this.profile = this.authService.getLoggedUser();
  }

  ngOnInit() {

    this.router.events.pipe(takeUntil(this.subject$), filter(event => event instanceof NavigationStart))
        .subscribe((e: NavigationStart) => {
          this.isHome = (e.url === '/') ? true : false;
          this.isProfile = (e.url.startsWith('/account')) ? true : false;
        });
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }

  onProfile() {
    this.profileSheet.open(ProfileOptionsComponent);
  }

}
