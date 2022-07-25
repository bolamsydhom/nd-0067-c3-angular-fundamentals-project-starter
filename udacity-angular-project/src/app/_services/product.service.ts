import { Product } from './../_models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json')
  }

  getProductById(id: number) {
    return this.http.get<Product>('../../assets/data.json').pipe(map((data: any) => data.find((product: Product) => product.id === id)));
  }
}
