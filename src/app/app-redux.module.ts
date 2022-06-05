import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {COFFEE_PRODUCTS_STORE_KEY} from '@@store/coffee-products-store.config';
import {CoffeeProductsEffects} from '@@store/coffee-products.effects';
import {coffeeProductsReducer} from '@@store/coffee-products.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({[COFFEE_PRODUCTS_STORE_KEY]: coffeeProductsReducer}),
    EffectsModule.forRoot([CoffeeProductsEffects]),
    StoreDevtoolsModule.instrument({
      name: 'coffee-products-app',
      maxAge: 25,
      logOnly: environment.production
    })
  ]
})
export class AppReduxModule {}
