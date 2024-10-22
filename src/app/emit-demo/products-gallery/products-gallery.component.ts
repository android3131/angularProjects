import { Component } from '@angular/core';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.css']
})
export class ProductsGalleryComponent {

  searchResult: string = '';
  products = [
    { name: 'Product 1', description: 'Description 1' },
    { name: 'Product 2', description: 'Description 2' },
    { name: 'Product 3', description: 'Description 3' }
  ];

  onSearch(query: string) {
    this.searchResult = query;
  }
}
