import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { AuthService } from 'src/app/common/services/auth.service';
import { UserService } from 'src/app/common/services/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.component.html',
  styleUrls: ['./profile-options.component.scss']
})
export class ProfileOptionsComponent implements OnInit, OnDestroy {

  subject$ = new Subject<void>();

  constructor(private bottomSheetRef: MatBottomSheetRef<ProfileOptionsComponent>, private authService: AuthService,
              private userService: UserService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    /*event.preventDefault();*/
  }

  onNewDiet(): void {
    this.userService.generateUserDiet().pipe(takeUntil(this.subject$))
        .subscribe((res: any) => {
          this.bottomSheetRef.dismiss();
        }, (err: any) => {
          console.log(err);
        });
  }

  onExit(): void {
    this.authService.logOff();
    window.location.href = '/';
    this.bottomSheetRef.dismiss();
  }

}
