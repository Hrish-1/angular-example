import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

interface Shipping {
  type: string;
  price: number;
}

@Injectable()
export class CartService {
  constructor(private http: HttpClient) {}

  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<Shipping[]>('/assets/shipping.json');
  }
}
