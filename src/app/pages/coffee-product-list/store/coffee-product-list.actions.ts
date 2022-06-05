import {createAction, props} from '@ngrx/store';
import {CoffeeProduct} from '@@shared/models/coffee-product';

const SetInitialData = '[Coffee Product List] set initial data';
const UpdateListPageData = '[Coffee Products List] update coffee product list page data';
const UpdateListPageSize = '[Coffee Products List] update coffee product list page size';

export namespace CoffeeProductListActions {
  export const setInitialData = createAction(SetInitialData, props<{ products: CoffeeProduct[] }>());
  export const updateListPageData = createAction(
    UpdateListPageData,
    props<{ pageNumber: number, products: CoffeeProduct[] }>()
  );
  export const updateListPageSize = createAction(
    UpdateListPageSize,
    props<{ pageSize: number, products: CoffeeProduct[] }>()
  );
}
