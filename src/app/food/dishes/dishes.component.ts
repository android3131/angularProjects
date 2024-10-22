import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataOfDishMealsFromAPI, MealDish } from '../types';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent {
  categoryDihesId?: string;
  categoryDishesArr?: MealDish[];

  constructor(private route: ActivatedRoute, private foodService: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let temp = params.get('categoryDihesId');
      this.categoryDihesId = temp ? temp : "NA";
      this.foodService.getMealDishesOfCategoryFromAPI(this.categoryDihesId);
    });

    this.foodService.getTheMealDishesOfCategorySubject()
      .subscribe((dataOfDishMealsFromAPI) => {
        console.log("we got Dishes:", dataOfDishMealsFromAPI);
        this.categoryDishesArr = (dataOfDishMealsFromAPI as DataOfDishMealsFromAPI).meals;
      });
  }

  dishWasClicked(mealId: string) {
    this.router.navigate(['/gallery', this.categoryDihesId, mealId]);
  }
}