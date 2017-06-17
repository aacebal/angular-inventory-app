import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from  '../product/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productList: Product[];

  constructor() { }

  ngOnInit() {
  }

  @Output() onProductSelected: EventEmitter<Product>

}
