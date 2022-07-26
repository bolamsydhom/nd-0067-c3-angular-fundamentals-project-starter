import { CartService } from './../../_services/cart.service';
import { Product } from './../../_models/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/_models/cart.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() productClicked = new EventEmitter<Cart>();
  allowedNumberOfProducts = Array(10);
  quantity: number = 1;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  
  addToCart(product: Product){
    alert(`${product.name} added to cart`);
    const cart: Cart = {
      product: product,
      quantity: +this.quantity
    };
    this.productClicked.emit(cart);
  }
}
