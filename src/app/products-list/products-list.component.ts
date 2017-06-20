import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from  '../product/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productList: Product[];

  @Output() onProductSelected: EventEmitter<Product>

  private currentProduct: Product;

  constructor() { }

  ngOnInit() {
    this.onProductSelected = new EventEmitter();
  }

  isSelected(product: Product): boolean {
    if(!product || this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}
