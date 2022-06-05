import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CoffeeProduct} from '@@shared/models/coffee-product';
import {CoffeeProductsState} from '@@shared/models/coffee-products-state';
import {CoffeeProductsActions} from './coffee-products.actions';
import {CoffeeProductsSelectors} from './coffee-products.selectors';

@Injectable({providedIn: 'root'})
export class CoffeeProductsReduxFacade {

  constructor(private store: Store<{ coffeeProducts: CoffeeProductsState }>) {}

  coffeeProducts$: Observable<CoffeeProduct[]> = this.store.pipe(select(CoffeeProductsSelectors.getProducts));

  fetchCoffeeProducts(limit: number) {
    this.store.dispatch(CoffeeProductsActions.fetch({limit}));
  }
}
