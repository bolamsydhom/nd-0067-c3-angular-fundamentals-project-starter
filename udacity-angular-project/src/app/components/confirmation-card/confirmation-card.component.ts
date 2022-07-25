import { Router } from '@angular/router';
import { OrderService } from './../../_services/order.service';
import { Order } from './../../_models/order.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-card',
  templateUrl: './confirmation-card.component.html',
  styleUrls: ['./confirmation-card.component.scss']
})
export class ConfirmationCardComponent implements OnInit {

  order!: Order;
  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.getOrder();
    if(!this.order){
      this.router.navigate(['home']);
    }
  }

  getOrder() {
    this.order = this.orderService.getOrder();
  }
}
