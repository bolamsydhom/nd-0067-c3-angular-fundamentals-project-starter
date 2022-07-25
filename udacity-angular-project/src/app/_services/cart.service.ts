import { Cart } from './../_models/cart.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList: Cart[] = [];
  constructor() { }

  addToCart(cart: Cart) {
    this.cartList.push(cart);
  }

  getCartList() {
    return [...this.cartList];
  }
}
