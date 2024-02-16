import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {CartService} from "./cart.service";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {ProviderDetailsComponent} from "./provider-details/provider-details.component";

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes),
    provideHttpClient()]
};
