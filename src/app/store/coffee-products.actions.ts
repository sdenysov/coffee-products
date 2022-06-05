import {createAction, props} from '@ngrx/store';
import {CoffeeProduct} from '@@shared/models/coffee-product';

const FetchCoffeeProducts = '[Coffee Products] fetch coffee products';
const SetCoffeeProducts = '[Coffee Products] set coffee products';

export namespace CoffeeProductsActions {
  export const fetch = createAction(FetchCoffeeProducts, props<{limit: number}>());
  export const fetchSucceed = createAction(SetCoffeeProducts, props<{products: CoffeeProduct[]}>());
}
