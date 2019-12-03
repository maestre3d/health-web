import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { REMOTE_CONFIG } from '../config/remote.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  facebookLogIn(): Observable<any> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get(`${REMOTE_CONFIG.URL}/connect/facebook`, { headers });
  }

  googleLogIn(): Observable<any> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*/*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    });
    return this.http.get(`${REMOTE_CONFIG.URL}/connect/google`, { headers });
  }

  storeCredentials(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getCredentials(): string {
    return localStorage.getItem('access_token');
  }
}
