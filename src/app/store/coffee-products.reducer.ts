import {createReducer, on} from '@ngrx/store';
import {CoffeeProductsState} from '@@shared/models/coffee-products-state';
import {CoffeeProductsActions} from './coffee-products.actions';

const initialState: CoffeeProductsState = {
  products: []
}

export const coffeeProductsReducer = createReducer(
  initialState,
  on(CoffeeProductsActions.fetchSucceed, (state, {products}) => ({products}))
)
