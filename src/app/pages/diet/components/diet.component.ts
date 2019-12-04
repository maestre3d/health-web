import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/common/services/user.service';
import { takeUntil } from 'rxjs/operators';
import { DietModel, MealModel } from 'src/app/common/models/diet.model';
import { DietHelper } from 'src/app/common/helpers/diet.helper';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.scss']
})
export class DietComponent implements OnInit, OnDestroy {

  subject$ = new Subject<void>();
  isLoading = false;
  gotError = false;

  breakfast: Array<MealModel>;
  collation1: Array<MealModel>;
  meals: Array<MealModel>;
  collation2: Array<MealModel>;
  dinner: Array<MealModel>;

  diet: DietModel;

  constructor(private userService: UserService, private dietHelper: DietHelper) {
    this.isLoading = true;

    this.userService.getUserDiet().pipe(takeUntil(this.subject$))
        .subscribe((diet: any) => {
          this.diet = diet.diet;

          this.breakfast = this.dietHelper.mapMeal(this.diet.json_url.diet.breakfast);
          this.collation1 = this.dietHelper.mapMeal(this.diet.json_url.diet.collation1);
          this.meals = this.dietHelper.mapMeal(this.diet.json_url.diet.meal);
          this.collation2 = this.dietHelper.mapMeal(this.diet.json_url.diet.collation2);
          this.dinner = this.dietHelper.mapMeal(this.diet.json_url.diet.dinner);

          console.log(this.breakfast);
          this.gotError = false;
        }, (err: any) => {
          console.log(err);
          this.gotError = true;
        }, () => {
          // Complete
          this.isLoading = false;
        });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }

}
