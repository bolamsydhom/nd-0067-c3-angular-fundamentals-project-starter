import { CartService } from './../../_services/cart.service';
import { Cart } from './../../_models/cart.model';
import { Product } from './../../_models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList!: Product[];
  subscriptions: Subscription[] = [];
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.subscriptions.push(this.productService.getAllProducts().subscribe((data: any) => {
      this.productList = data;
    }))

  }
  addToCart(cart: Cart){
    this.cartService.addToCart(cart);
  }
}
