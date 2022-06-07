import {CoffeeProductListState} from '@@coffee-product-list/models/coffee-product-list-state';
import {CoffeeProductListActions} from '@@coffee-product-list/store/coffee-product-list.actions';
import {createReducer, on} from '@ngrx/store';

export const initialState: CoffeeProductListState = {
  paginationVisible: false,
  pageProducts: [],
  totalProducts: [],
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
      pageProducts: products.slice(pageNumber - 1, limit),
      totalProducts: products
    }
  }),
  on(CoffeeProductListActions.updateListPageData, (state, {pageNumber}) => {
    const {limit, totalProducts} = state;
    const startItem = (pageNumber - 1) * limit;
    const endItem = limit * pageNumber;
    return {
      ...state,
      pageNumber,
      pageProducts: totalProducts.slice(startItem, endItem)
    }
  }),
  on(CoffeeProductListActions.updateListPageSize, (state, {pageSize}) => {
    return {
      ...state,
      limit: pageSize,
      pageNumber: pageSize === state.totalProductsCount ? 1 : state.pageNumber,
      pageProducts: state.totalProducts.slice(0, pageSize)
    }
  }),
  on(CoffeeProductListActions.resetState, () => ({...initialState}))
)
