export interface Meals {
    vegetables: number;
    fruits: number;
    cereals: number;
    cerealswfat: number;
    legumes: number;
    animal: number;
    animallfat: number;
    animalmfat: number;
    animalhfat: number;
    dairy: number;
    dairyskim: number;
    oils: number;
    oilswprotein: number;
    sugars: number;
    sugarswfat: number;
}

interface Diet {
    breakfast: Meals;
    collation1: Meals;
    meal: Meals;
    collation2: Meals;
    dinner: Meals;
}

export interface DietModel {
    id: string;
    total_calories: number;
    json_url: { diet: Diet };
    created_at: Date;
}

export interface MealModel {
    name: string;
    quantity: number;
}
