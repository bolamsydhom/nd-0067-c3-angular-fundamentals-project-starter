import { Cart } from './../_models/cart.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList: Cart[] = [];
  constructor() { }

  addToCart(cart: Cart) {
    if(this.cartList.length === 0) {
      this.cartList.push(cart);
    } else {
      let isExist = false;
      this.cartList.forEach((item: Cart) => {
        if(item.product.id === cart.product.id) {
          item.quantity += cart.quantity;
          isExist = true;
        }
      });
      if(!isExist) {
        this.cartList.push(cart);
      }
    }
  }

  getCartList() {
    return [...this.cartList];
  }

  deleteCartItem(index: number) {
    this.cartList.splice(index, 1);
    return [...this.cartList];
  }
}
