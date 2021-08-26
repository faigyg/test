export interface Product {
  id: number;
  name: string;
  catalogNumber: number;
  amount: number;
  price: number;
  isActive: boolean;
}//aungular validation formController

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    catalogNumber: 907,
    amount: 321,
    price: 10,
    isActive: true
  },
  {
    id: 2,
    name: 'Phone Mini',
    catalogNumber: 908,
    amount: 0,
    price: 200,
    isActive: false
  },
  {
    id: 3,
    name: 'Phone Standard',
    catalogNumber: 909,
    amount: 7,
    price: 300,
    isActive: true
  },
  {
    id: 4,
    name: 'Phone1x',
    catalogNumber: 907,
    amount: 321,
    price: 160,
    isActive: true
  },
  {
    id: 5,
    name: 'Phone2',
    catalogNumber: 908,
    amount: 0,
    price: 20,
    isActive: true
  },
  {
    id: 6,
    name: 'Phone3',
    catalogNumber: 909,
    amount: 7,
    price: 7,
    isActive: false
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
