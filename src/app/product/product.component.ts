import { Component, OnInit } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor() {
  this.product = new Product(
    'NIECHAT',
    'A Nice Black Hat',
    '/assets/images/products/blackhat.jpg',
    ['Men', 'Accessories', 'Hats'],
    29.99
  ); }

  ngOnInit() {
  }

}
