import { Order } from './../_models/order.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order!: Order;
  constructor() { }

  setOrder(order: Order) {
    this.order = order;
  }

  getOrder() {
    return this.order;
  }
}
