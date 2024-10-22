import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';
import { CategoriesWeGetFromAPI, Category } from '../types';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriesArr?: Category[];

  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit() {
    this.foodService.getCategoriesFromAPI();

    this.foodService.getTheCategoriesSubject()
      .subscribe((infoOfCategories) => {
        console.log("we got categories", infoOfCategories);
        this.categoriesArr = (infoOfCategories as CategoriesWeGetFromAPI).categories;
      });
  }

  userClickedACategory(chosenCategoryId: string) {
    this.router.navigate(['/gallery', chosenCategoryId]);
  }
}