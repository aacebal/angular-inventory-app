import { Component } from '@angular/core';
import { Product } from './product/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/blackhat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99),
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99)
    ];
  }
}
