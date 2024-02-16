import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';
import {CommonModule, CurrencyPipe} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe,
    CommonModule
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit {

  product: Product| undefined;
  constructor(
      private route: ActivatedRoute,
      private cartService: CartService
  ) { }


  addToCart(product: Product | undefined) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
