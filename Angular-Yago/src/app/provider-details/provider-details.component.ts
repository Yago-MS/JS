import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Providers} from "../../assets/providers.json";
import {Provider} from "../providers";
import {CommonModule, CurrencyPipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
@Component({
  selector: 'app-provider-details',
  standalone: true,
  templateUrl: './provider-details.component.html',
  imports: [
    RouterLink,
    CurrencyPipe,
      CommonModule,
  ],
  styleUrl: './provider-details.component.css'
})
export class ProviderDetailsComponent {

  provider: Provider|undefined;
  constructor(
      private route: ActivatedRoute
  ) { }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const providerIdFromRoute = Number(routeParams.get('providerId'));

    // Find the provider that correspond with the id provided in route.
   this.provider = Providers.find(pro => pro.id === providerIdFromRoute);
  }
}
