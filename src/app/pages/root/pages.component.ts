import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { User } from 'src/app/common/models/user.model';
import { MatBottomSheet } from '@angular/material';
import { CompleteProfileComponent } from '../shared/complete-profile/complete-profile.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private bottomSheet: MatBottomSheet) {
    this.user = this.authService.getLoggedUser();

    if ( this.user && !this.user.active) {
      this.bottomSheet.open(CompleteProfileComponent);
    }
  }

  ngOnInit() {
  }

}
