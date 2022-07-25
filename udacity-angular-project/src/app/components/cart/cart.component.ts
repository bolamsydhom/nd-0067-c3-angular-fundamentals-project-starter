import { Cart } from './../../_models/cart.model';
import { Subscription } from 'rxjs';
import { CartService } from './../../_services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  subscription: Subscription[] = [];
  cartList: Cart[] = [];
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartList();
  }
  getCartList() {
    this.cartList = this.cartService.getCartList();
    this.getTotalAmount();

  }
  getTotalAmount() {
    let total = 0;
    this.cartList.forEach(element => {
      total += element.product.price * element.quantity;
    }
    );
    this.total = total;
  }

  onChangeQuantity(e: any, index: number) {
    const quantity = e.target.value;
    console.log(quantity);
    
    if (Number(quantity) > 0) {
      this.cartList[index].quantity = quantity;
      this.getTotalAmount();
    } else {
      this.cartList = this.cartService.deleteCartItem(index)
      alert('Product removed from cart');
      this.getTotalAmount();
    }
  }
  submit(i: any) { }

}
