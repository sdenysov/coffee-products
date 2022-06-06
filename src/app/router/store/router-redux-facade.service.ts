import {RouterStateSelectors} from '@@router/store/router-state.selectors';
import {StoreUtils} from '@@shared/utils/store.utils';
import {Injectable} from '@angular/core';
import {Params} from '@angular/router';
import {Store} from '@ngrx/store';

@Injectable({providedIn: 'root'})
export class RouterReduxFacade {

  constructor(public store: Store) {}

  get urlParams(): Params {
    return StoreUtils.getSync(this.store, RouterStateSelectors.getRouteParam);
  }

  getCoffeeProductId(): string {
    return this.urlParams['id'];
  }
}
