import {CoffeeProductListState} from '@@coffee-product-list/models/coffee-product-list-state';
import {CoffeeProductListActions} from '@@coffee-product-list/store/coffee-product-list.actions';
import {createReducer, on} from '@ngrx/store';

const initialState: CoffeeProductListState = {
  paginationVisible: false,
  pageProducts: [],
  limit: 10,
  pageNumber: 1,
  totalProductsCount: 0
}

export const coffeeProductListReducer = createReducer(
  initialState,
  on(CoffeeProductListActions.setInitialData, (state, {products}) => {
    const {pageNumber, limit} = state;
    return {
      ...state,
      paginationVisible: products.length > limit,
      totalProductsCount: products.length,
      pageProducts: products.slice(pageNumber - 1, limit)
    }
  }),
  on(CoffeeProductListActions.updateListPageData, (state, {pageNumber, products}) => {
    const {limit} = state;
    const startItem = (pageNumber - 1) * limit;
    const endItem = limit * pageNumber;
    return {
      ...state,
      pageNumber,
      pageProducts: products.slice(startItem, endItem)
    }
  }),
  on(CoffeeProductListActions.updateListPageSize, (state, {pageSize, products}) => {
    return {
      ...state,
      limit: pageSize,
      pageNumber: 1,
      pageProducts: products.slice(0, pageSize)
    }
  })
)
