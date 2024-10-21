import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' }
  ];
  constructor(private router: Router) { }

  userClickedAProduct(productId: number) {
    this.router.navigate(['/products', productId]); // ניווט לדף פרטי המוצר
  }
}