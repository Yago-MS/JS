import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import {AsyncPipe, CommonModule, CurrencyPipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-shipping',
  standalone: true,
  templateUrl: './shipping.component.html',
  imports: [
    AsyncPipe,
    CurrencyPipe,
      CommonModule,
  ],
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

}
