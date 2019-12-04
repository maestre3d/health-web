import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REMOTE_CONFIG } from '../config/remote.config';
import { map } from 'rxjs/operators';
import { FoodModel } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  // Available queries ?category=2&limit=1&page=1

  constructor(private http: HttpClient) { }

  getAll(args?: string): Observable<Array<FoodModel>> {
    const query = `?${args}` || '';
    return this.http.get(`${REMOTE_CONFIG.URL}/food${query}`).pipe(map((res: any) => res.foods));
  }
}
