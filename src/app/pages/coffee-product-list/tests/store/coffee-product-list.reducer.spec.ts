import {CoffeeProductListState} from '@@coffee-product-list/models/coffee-product-list-state';
import {CoffeeProductListReduxFacade} from '@@coffee-product-list/store/coffee-product-list-redux.facade';
import {COFFEE_PRODUCTS_LIST_STORE_KEY} from '@@coffee-product-list/store/coffee-product-list-store.config';
import {CoffeeProductListActions} from '@@coffee-product-list/store/coffee-product-list.actions';
import {coffeeProductListReducer, initialState} from '@@coffee-product-list/store/coffee-product-list.reducer';
import {CoffeeProduct} from '@@shared/models/coffee-product';
import {TestBed} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';

const COFFEE_PRODUCTS_MOCK: CoffeeProduct[] = [
  {
    id: 4036,
    uid: 'f068a2b6-8fc0-4bc2-9f02-9e746e176e3a',
    blend_name: 'Strong Coffee',
    origin: 'Volcan, Panama',
    variety: 'Barbuk Sudan',
    notes: 'lingering, creamy, mandarin, mango, hazelnut',
    intensifier: 'delicate'
  },
  {
    id: 3967,
    uid: '3486061a-00c5-4064-b826-8e93ea247356',
    blend_name: 'Cascara Breaker',
    origin: 'Sul Minas, Brazil',
    variety: 'Blue Mountain',
    notes: 'unbalanced, full, passion fruit, green apple, butter',
    intensifier: 'astringent'
  },
  {
    id: 23,
    uid: '3486061a-00c5-4064-b826-8e93ea247356',
    blend_name: 'Cascara Breaker',
    origin: 'Sul Minas, Brazil',
    variety: 'Blue Mountain',
    notes: 'unbalanced, full, passion fruit, green apple, butter',
    intensifier: 'astringent'
  },
];

describe('CoffeeProductList', () => {

  let storeFacade: CoffeeProductListReduxFacade;
  const initialStateMock = {
    paginationVisible: false,
    pageProducts: [],
    totalProducts: [],
    limit: 3,
    pageNumber: 1,
    totalProductsCount: 0
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({[COFFEE_PRODUCTS_LIST_STORE_KEY]: coffeeProductListReducer})
      ],
      providers: [CoffeeProductListReduxFacade],
    });
    storeFacade = TestBed.inject(CoffeeProductListReduxFacade);
  });

  it('should return the initial state', () => {
    expect(storeFacade.getState()).toEqual(initialState);
  });

  it('should set initial data correctly and pagination should not be visible', () => {
    const action = CoffeeProductListActions.setInitialData({products: COFFEE_PRODUCTS_MOCK});
    const resultState = coffeeProductListReducer(initialStateMock, action);
    expect(resultState.paginationVisible).toBe(false);
    expect(resultState.pageProducts).toEqual(COFFEE_PRODUCTS_MOCK);
    expect(resultState.totalProductsCount).toBe(3);
  });

  it('should set initial data correctly and pagination should be visible', () => {
    const testCaseState = {...initialStateMock, limit: 2};
    const expectedPageProducts = COFFEE_PRODUCTS_MOCK.slice(0, testCaseState.limit);
    const action = CoffeeProductListActions.setInitialData({products: COFFEE_PRODUCTS_MOCK});
    const resultState = coffeeProductListReducer(testCaseState, action);
    expect(resultState.paginationVisible).toBe(true);
    expect(resultState.pageProducts).toEqual(expectedPageProducts);
    expect(resultState.totalProductsCount).toBe(3);
  });

  it('should set page number and change products depends on page', () => {
    const testCaseState: CoffeeProductListState = {...initialStateMock, totalProducts: COFFEE_PRODUCTS_MOCK, limit: 2};
    const testCase = {pageNumber: 2};
    const testCaseStartItem = (testCase.pageNumber - 1) * testCaseState.limit;
    const testCaseEndItem = testCase.pageNumber * testCaseState.limit;
    const expectedPageProducts = testCaseState.totalProducts.slice(testCaseStartItem, testCaseEndItem);
    const action = CoffeeProductListActions.updateListPageData(testCase);
    const resultState = coffeeProductListReducer(testCaseState, action);
    expect(resultState.pageNumber).toBe(2);
    expect(resultState.pageProducts).toEqual(expectedPageProducts);
  });

  it('should update page size and reset page number', () => {
    const testCaseState: CoffeeProductListState = {
      ...initialStateMock,
      totalProducts: COFFEE_PRODUCTS_MOCK,
      limit: 2,
      pageNumber: 2,
      totalProductsCount: COFFEE_PRODUCTS_MOCK.length
    };
    const testCase = {pageSize: 3};
    const expectedPageProducts = testCaseState.totalProducts.slice(0, testCase.pageSize);
    const action = CoffeeProductListActions.updateListPageSize(testCase);
    const resultState = coffeeProductListReducer(testCaseState, action);
    expect(resultState.limit).toBe(3);
    expect(resultState.pageNumber).toBe(1);
    expect(resultState.pageProducts).toEqual(expectedPageProducts);
  });

});
