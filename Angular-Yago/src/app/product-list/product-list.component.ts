import { Component } from '@angular/core';

import { products } from '../products';
import {RouterLink} from "@angular/router";
import {ProductAlertsComponent} from "../product-alerts/product-alerts.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    RouterLink,
      ProductAlertsComponent,
      CommonModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/