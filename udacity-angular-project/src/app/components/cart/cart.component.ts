import { OrderService } from './../../_services/order.service';
import { Order } from './../../_models/order.model';
import { Cart } from './../../_models/cart.model';
import { Subscription } from 'rxjs';
import { CartService } from './../../_services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  subscription: Subscription[] = [];
  cartList: Cart[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router ) { }

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
  submit(form: any) {
    console.log(form);
    const order: Order = {
      cstName: form.value.name,
      orderTotal: this.total,
    }
    this.orderService.setOrder(order);
    this.router.navigate(['/confirm-order']);


  }

}
