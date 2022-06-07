import {CoffeeProduct} from '@@shared/models/coffee-product';
import {createAction, props} from '@ngrx/store';

const FetchCoffeeProducts = '[Coffee Products] fetch coffee products';
const FetchCoffeeProductsFailed = '[Coffee Products] fetch coffee products failed';
const SetCoffeeProducts = '[Coffee Products] set coffee products';

export namespace CoffeeProductsActions {
  export const fetch = createAction(FetchCoffeeProducts, props<{ limit: number }>());
  export const fetchSucceed = createAction(SetCoffeeProducts, props<{ products: CoffeeProduct[] }>());
  export const fetchFailed = createAction(FetchCoffeeProductsFailed);
}
