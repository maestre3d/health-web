import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/common/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  private subject$ = new Subject<void>();
  tmp = '';

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParamMap.pipe(takeUntil(this.subject$)).subscribe(params => {
      const token = params.get('token');

      if (token) { this.authService.storeCredentials(token); this.router.navigate(['/']); }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }

}
