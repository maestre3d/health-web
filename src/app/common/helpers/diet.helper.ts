import { MealModel, Meals } from '../models/diet.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DietHelper {
    mapMeal(meal: Meals): Array<MealModel> {
        let mealArray: Array<MealModel>;
        mealArray = [
            {name: 'Origen animal muy pocas calorías', quantity: meal.animal},
            {name: 'Origen animal altas calorías', quantity: meal.animalhfat},
            {name: 'Origen animal medio calorías', quantity: meal.animalmfat},
            {name: 'Origen animal pocas calorías', quantity: meal.animallfat},
            {name: 'Cereales', quantity: meal.cereals},
            {name: 'Cereales con grasa', quantity: meal.cerealswfat},
            {name: 'Lácteos', quantity: meal.dairy},
            {name: 'Lácteos sin grasa', quantity: meal.dairyskim},
            {name: 'Frutas', quantity: meal.fruits},
            {name: 'Vegetales', quantity: meal.vegetables},
            {name: 'Legumbres', quantity: meal.legumes},
            {name: 'Aceites', quantity: meal.oils},
            {name: 'Aceites con proteína', quantity: meal.oilswprotein},
            {name: 'Azúcares', quantity: meal.sugars},
            {name: 'Azúcares con grasa', quantity: meal.sugarswfat}
        ];
        return mealArray.filter((item) => item.quantity > 0);
    }
}
