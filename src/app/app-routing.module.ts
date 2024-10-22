import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConferenceComponent } from './conference-screen/conference/conference.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriesComponent } from './food/categories/categories.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  // { path: 'products/:id', component: ProductDetailsComponent }, 
  { path: 'products/:id', component: ProductsComponent },
  { path: 'conference', component: ConferenceComponent },
  { path: 'gallery', component: CategoriesComponent },
  { path: 'gallery/:categoryDihesId', component: CategoriesComponent },
  { path: 'gallery/:categoryDihesId/:instructionsId', component: CategoriesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } // "catch all" routing
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
