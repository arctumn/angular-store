import { Injectable } from '@angular/core';
import { Product, products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //List of items in the cart
  items: Product[] = [];

  constructor() { }

  //Method that appends a product to the cart
  addToCart(product: Product) {
    this.items.push(product)
  }
  //Method that gets all the items
  getItems(){
    return this.items
  }
  //Method that clears the items from the cart
  clearCart(){
    this.items = [];
    return this.items
  }
}
