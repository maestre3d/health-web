import { MealModel, Meals } from '../models/diet.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DietHelper {
    mapMeal(meal: Meals): Array<MealModel> {
        let mealArray: Array<MealModel>;
        mealArray = [
            {name: 'animal', quantity: meal.animal},
            {name: 'animalhfat', quantity: meal.animalhfat},
            {name: 'animalmfat', quantity: meal.animalmfat},
            {name: 'animallfat', quantity: meal.animallfat},
            {name: 'cereals', quantity: meal.cereals},
            {name: 'cerealswfat', quantity: meal.cerealswfat},
            {name: 'dairy', quantity: meal.dairy},
            {name: 'dairyskim', quantity: meal.dairyskim},
            {name: 'fruits', quantity: meal.fruits},
            {name: 'vegetables', quantity: meal.vegetables},
            {name: 'legumes', quantity: meal.legumes},
            {name: 'oils', quantity: meal.oils},
            {name: 'oilswprotein', quantity: meal.oilswprotein},
            {name: 'sugars', quantity: meal.sugars},
            {name: 'sugarswfat', quantity: meal.sugarswfat}
        ];
        return mealArray.filter((item) => item.quantity > 0);
    }
}
