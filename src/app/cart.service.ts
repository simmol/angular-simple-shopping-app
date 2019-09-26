import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CartService {
  items = [];
  countChange: Subject<number> = new Subject<number>();

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product)
    this.countChange.next(this.getCount());
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return this.items.length
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}