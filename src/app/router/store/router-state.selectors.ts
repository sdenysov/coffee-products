import {RouterState} from '@@router/models/router-state';
import {ROUTE_STORE_KEY} from '@@router/store/router-store.config';
import {RouterReducerState} from '@ngrx/router-store';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const empty: RouterState = {
  url: '/',
  params: {},
  data: {}
};

export namespace RouterStateSelectors {
  export const getState = createFeatureSelector<RouterReducerState<RouterState>>(ROUTE_STORE_KEY);
  export const getRouterState = createSelector(getState, state => state && state.state);
  export const getRouteParam = createSelector(getRouterState, state => state ? state.params : empty.params);
}
