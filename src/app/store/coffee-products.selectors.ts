import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CoffeeProductsState} from '@@shared/models/coffee-products-state';
import {COFFEE_PRODUCTS_STORE_KEY} from './coffee-products-store.config';

export namespace CoffeeProductsSelectors {
  export const getState = createFeatureSelector<CoffeeProductsState>(COFFEE_PRODUCTS_STORE_KEY);
  export const getProducts = createSelector(getState, s => s.products);
}


