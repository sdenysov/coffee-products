import {CoffeeProductListState} from '@@coffee-product-list/models/coffee-product-list-state';
import {COFFEE_PRODUCTS_LIST_STORE_KEY} from '@@coffee-product-list/store/coffee-product-list-store.config';
import {createFeatureSelector} from '@ngrx/store';

export namespace CoffeeProductListSelectors {
  export const getState = createFeatureSelector<CoffeeProductListState>(COFFEE_PRODUCTS_LIST_STORE_KEY);
}
