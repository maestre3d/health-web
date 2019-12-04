import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { AuthService } from 'src/app/common/services/auth.service';
import { User } from 'src/app/common/models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcherHelper } from 'src/app/common/helpers/errorstate.helper';
import { format } from 'util';
import { PersonalViewModel } from './models/personalview.model';
import { UserService } from 'src/app/common/services/user.service';
import { takeUntil, switchMap, catchError } from 'rxjs/operators';
import { Subject, EMPTY } from 'rxjs';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent implements OnInit, OnDestroy {
  profile: User;
  // Form
  signInGroup = new FormGroup({
    nameControl: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9 ]*$'),
      Validators.maxLength(20)
    ]),
    weightControl : new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9.]*$'),
      Validators.maxLength(4)
    ]),
    heightControl : new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9.]*$'),
      Validators.maxLength(4)
    ]),
    dateControl : new FormControl('', [
      Validators.required
    ])
  });
  // ngModels
  genderEnum: string;
  activityEnum: string;

  nameMatcher = new ErrorStateMatcherHelper();
  weightMatcher = new ErrorStateMatcherHelper();
  heightMatcher = new ErrorStateMatcherHelper();
  dateMatcher = new ErrorStateMatcherHelper();

  // UI
  isLoading = false;
  gotError = false;

  // Subs
  subject$ = new Subject<void>();


  constructor(private bottomSheetRef: MatBottomSheetRef<CompleteProfileComponent>, private authService: AuthService,
              private userService: UserService) {
    this.profile = this.authService.getLoggedUser();
    this.signInGroup.get('nameControl').setValue(this.profile.name);
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }

  onPost(): void {
    // Init operation
    this.isLoading = true;

    const payload: PersonalViewModel = {
      birth: this.getFormattedDate(this.signInGroup.get('dateControl').value),
      weight: this.signInGroup.get('weightControl').value,
      height: this.signInGroup.get('heightControl').value,
      activity: this.activityEnum,
      sex: this.genderEnum
    };

    this.userService.savePersonalInfo(payload).pipe(takeUntil(this.subject$))
        .pipe(switchMap((res: any) => {
          if (res !== null) {
            return this.userService.refreshSession().pipe(takeUntil(this.subject$));
          }

          this.isLoading = false;
          this.gotError = true;
          return EMPTY;
        }), catchError((err: any) => {
          this.isLoading = false;
          this.gotError = true;
          return EMPTY;
        }))
        .subscribe((token: any) => {
          this.bottomSheetRef.dismiss();
        }, (err: any) => {
          this.gotError = true;
        }, () => {
          // Completed
          this.isLoading = false;
        });
  }

  private getFormattedDate(date: Date): string {
    const month = format(date .getMonth() + 1);
    const day = format(date .getDate());
    const year = format(date .getFullYear());
    return `${month}/${day}/${year}`;
}

}
