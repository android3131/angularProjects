import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FoodService } from '../food.service';
import { MealDishExtendedInfo, MealsExtendedFromApi } from '../types';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {
  instructionsId?: string;
  theDish?: MealDishExtendedInfo;

  constructor(private route: ActivatedRoute, private foodService: FoodService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let temp = params.get('instructionsId');
      this.instructionsId = temp ? temp : "NA";
      if (this.instructionsId) {
        this.foodService.getMealInstructionsFromAPI(this.instructionsId);
      }
    });

    this.foodService.getMealInstructionsSubject()
      .subscribe((dataOfMealFromAPI) => {
        console.log("we go instructions:", dataOfMealFromAPI);
        this.theDish = (dataOfMealFromAPI as MealsExtendedFromApi).meals[0];
      });
  }
}