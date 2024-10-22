import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ConferenceComponent } from './conference-screen/conference/conference.component';
import { PersonCardComponent } from './conference-screen/person-card/person-card.component';
import { BaseContentComponent } from './base-content/base-content.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriesComponent } from './food/categories/categories.component';
import { InstructionsComponent } from './food/instructions/instructions.component';
import { DishesComponent } from './food/dishes/dishes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConferenceComponent,
    PersonCardComponent,
    BaseContentComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CategoriesComponent,
    InstructionsComponent,
    DishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
