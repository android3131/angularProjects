import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private categoriesSubject = new ReplaySubject(1);
  private mealDishesOfCategorySubject = new ReplaySubject(1);
  private mealInstructionsSubject = new ReplaySubject(1);

  constructor(private http: HttpClient) { }

  getCategoriesFromAPI() {
    this.http.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .subscribe((theData) => {
        this.categoriesSubject.next(theData);
      });
  }

  getTheCategoriesSubject() {
    return this.categoriesSubject;
  }

  getMealDishesOfCategoryFromAPI(category: string) {
    this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .subscribe((theData) => {
        this.mealDishesOfCategorySubject.next(theData);
      });
  }

  getTheMealDishesOfCategorySubject() {
    return this.mealDishesOfCategorySubject;
  }


  getMealInstructionsFromAPI(mealId: string) {
    this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .subscribe((theData) => {
        this.mealInstructionsSubject.next(theData);
      });
  }


  getMealInstructionsSubject() {
    return this.mealInstructionsSubject;
  }
}