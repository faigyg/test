import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { FormControl, FormGroup, Validators } from '@angular/forms';//validation

import { Product, products } from '../products';
import { HttpService } from '../services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  pName: string = '';
  constructor(
    private route: ActivatedRoute,
    //private httpService: HttpService
  ) {}

  //formG!: FormGroup;//validation
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);

  /*validation:
    this.heroForm = new FormGroup({
    price: new FormControl('product.price', [
      Validators.pattern("^[0-9]*$")
    ])});*/

  }

  //get price() { return this.heroForm.get('price')!; }//validation:

  updateProductDetails = () => {
    //this.httpService.updateProducts(this.product);
  };


}
