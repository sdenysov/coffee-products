import {CoffeeProductListState} from '@@coffee-product-list/models/coffee-product-list-state';
import {COFFEE_PRODUCTS_LIST_STORE_KEY} from '@@coffee-product-list/store/coffee-product-list-store.config';
import {CoffeeProductListActions} from '@@coffee-product-list/store/coffee-product-list.actions';
import {CoffeeProductListSelectors} from '@@coffee-product-list/store/coffee-product-list.selectors';
import {CoffeeProduct} from '@@shared/models/coffee-product';
import {StoreUtils} from '@@shared/utils/store.utils';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CoffeeProductListReduxFacade {

  constructor(private store: Store<{ [COFFEE_PRODUCTS_LIST_STORE_KEY]: CoffeeProductListState }>) {}

  state$: Observable<CoffeeProductListState> = this.store.pipe(select(CoffeeProductListSelectors.getState));

  getState(): CoffeeProductListState {
    return StoreUtils.getSync(this.store, CoffeeProductListSelectors.getState);
  }

  setInitialData(products: CoffeeProduct[]): void {
    this.store.dispatch(CoffeeProductListActions.setInitialData({products}));
  }

  updateListPageData(pageNumber: number): void {
    this.store.dispatch(CoffeeProductListActions.updateListPageData({pageNumber}));
  }

  updateListPageSize(pageSize: number): void {
    this.store.dispatch(CoffeeProductListActions.updateListPageSize({pageSize}));
  }

  resetState(): void {
    this.store.dispatch(CoffeeProductListActions.resetState());
  }
}
