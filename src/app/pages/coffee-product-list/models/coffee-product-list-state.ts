import {CoffeeProduct} from '@@shared/models/coffee-product';

export interface CoffeeProductListState {
  paginationVisible: boolean;
  pageProducts: CoffeeProduct[];
  limit: number;
  pageNumber: number;
  totalProductsCount: number;
  totalProducts: CoffeeProduct[];
}
