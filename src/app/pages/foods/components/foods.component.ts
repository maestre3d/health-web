import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { FoodService } from 'src/app/common/services/food.service';
import { takeUntil } from 'rxjs/operators';
import { FoodModel } from 'src/app/common/models/food.model';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit, OnDestroy {

  subject$ = new Subject<void>();

  foods: Array<FoodModel>;

  isLoading = false;
  gotError = false;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.onSearch();
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }

  onSearch(category?: string) {
    this.isLoading = true;
    const args = category && category !== null ? `category=${category}` : undefined;

    this.foodService.getAll(args).pipe(takeUntil(this.subject$))
        .subscribe((foods: Array<FoodModel>) => {
          this.foods = foods;
          this.gotError = false;
        }, (err: any) => {
          this.gotError = true;
          this.isLoading = false;
        }, () => {
          // Complete
          this.isLoading = false;
        });
  }

}
