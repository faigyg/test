import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = products;
  productsFilterByRange = products;
  activeProducts = this.productsFilterByRange.filter(p => p.isActive);
  inActiveProducts = this.productsFilterByRange.filter(p => !p.isActive);
  priceRange = [
    { from: 0, until: 50 },
    { from: 50, until: 100 },
    { from: 100, until: 200 }
  ];

  getPriceRangeList = () => {
    const pricesRange = this.priceRange.map(
      range => range.from + ' - ' + range.until + ''
    ); 
    pricesRange.push('200 +');
    return pricesRange;
  };
  priceRangeList = this.getPriceRangeList();

  priceRangeCheckedList = [false, false, false, false];

  filterName = '';

  filterByPrice(e: any, index: any) {
    const isBetween = (x: any, min: any, max: any) => {
      return x >= min && x <= max;
    };
    const isUpMax = (product: any) => {
      return product.price > 200;
    };
    const isInRang = (product: any, priceIndex: number) => {
      if (this.priceRange.length === priceIndex) {
        return isUpMax(product);
      } else {
        return isBetween(
          product.price,
          this.priceRange[priceIndex].from,
          this.priceRange[priceIndex].until
        );
      }
    };

    const isInCheckedRange = (product: any) => {
      return this.priceRangeCheckedList.find((isChecek, priceIndex) => {
        return (
          isChecek &&
          isInRang(
            product,priceIndex
          )
        );
      });
    };
    const isNotChecked = () => {
      return !this.priceRangeCheckedList.find(c => c);
    };

    this.priceRangeCheckedList[index] = e.target.checked;

    if (isNotChecked()) {
      this.productsFilterByRange = products;
    } else {
      this.productsFilterByRange = this.products.filter(product =>
        isInCheckedRange(product)
      );
    }
    //change automatically
    this.activeProducts = this.productsFilterByRange.filter(p => p.isActive);
    this.inActiveProducts = this.productsFilterByRange.filter(p => !p.isActive);
  }
}
