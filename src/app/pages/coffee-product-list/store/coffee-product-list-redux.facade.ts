import {CoffeeProductListState} from '@@coffee-product-list/models/coffee-product-list-state';
import {COFFEE_PRODUCTS_LIST_STORE_KEY} from '@@coffee-product-list/store/coffee-product-list-store.config';
import {CoffeeProductListActions} from '@@coffee-product-list/store/coffee-product-list.actions';
import {CoffeeProductListSelectors} from '@@coffee-product-list/store/coffee-product-list.selectors';
import {CoffeeProduct} from '@@shared/models/coffee-product';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CoffeeProductListReduxFacade {

  constructor(private store: Store<{ [COFFEE_PRODUCTS_LIST_STORE_KEY]: CoffeeProductListState }>) {}

  state$: Observable<CoffeeProductListState> = this.store.pipe(select(CoffeeProductListSelectors.getState));

  setInitialData(products: CoffeeProduct[]): void {
    this.store.dispatch(CoffeeProductListActions.setInitialData({products}));
  }

  updateListPageData(pageNumber: number, products: CoffeeProduct[]): void {
    this.store.dispatch(CoffeeProductListActions.updateListPageData({pageNumber, products}));
  }

  updateListPageSize(pageSize: number, products: CoffeeProduct[]): void {
    this.store.dispatch(CoffeeProductListActions.updateListPageSize({pageSize, products}));
  }
}
