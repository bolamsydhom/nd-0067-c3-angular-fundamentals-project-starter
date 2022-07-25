import { Product } from './../../_models/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  allowedNumberOfProducts = Array(4);
  constructor() { }

  ngOnInit(): void {
  }

}
