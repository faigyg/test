import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Product } from './products';

@Injectable()
export class HttpService {
  private prefixUrl = 'https://localhost:44388/api/Product';

  constructor(private http: HttpClient) {}

  getProducts(productId = null): Observable<any> {
    return this.http.get(this.prefixUrl + 'GetProducts' + productId);
  }
  updateProducts(newProduct: Product): Observable<any> {
    return this.http.post(this.prefixUrl + 'UpdateProducts', newProduct);
  }
}
