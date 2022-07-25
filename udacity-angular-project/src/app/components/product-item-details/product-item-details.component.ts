import { CartService } from './../../_services/cart.service';
import { Product } from './../../_models/product.model';
import { ProductService } from 'src/app/_services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/_models/cart.model';


@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.scss']
})
export class ProductItemDetailsComponent implements OnInit {
  product!: Product;
  allowedNumberOfProducts = Array(10);
  quantity: number = 1;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.getProductById(+params.id);
        
      }
    )
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(
      (product: Product)=> {
        this.product = product;
        
      }
    )
  }

  addToCart(product: Product){
    alert(`${product.name} added to cart`);
    const cart: Cart = {
      product: product,
      quantity: +this.quantity
    };
    this.cartService.addToCart(cart);
  }

}
