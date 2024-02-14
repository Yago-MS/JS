import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Providers} from "../providers.json";
import {Provider} from "../providers";
@Component({
  selector: 'app-provider-details',
  standalone: false,
  templateUrl: './provider-details.component.html',
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
