import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { PersonalViewModel } from 'src/app/pages/shared/complete-profile/models/personalview.model';
import { REMOTE_CONFIG } from '../config/remote.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  savePersonalInfo(payload: PersonalViewModel): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getCredentials()}`
    });

    return this.http.post(`${REMOTE_CONFIG.URL}/account/info`, payload, { headers });
  }

  updatePersonalInfo(payload: PersonalViewModel): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getCredentials()}`
    });

    return this.http.put(`${REMOTE_CONFIG.URL}/account/info`, payload, { headers });
  }

  generateUserDiet(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getCredentials()}`
    });

    return this.http.patch(`${REMOTE_CONFIG.URL}/account/diet`, { headers });
  }

  refreshSession(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getCredentials()}`
    });

    return this.http.get(`${REMOTE_CONFIG.URL}/account/refresh`, { headers });
  }
}
