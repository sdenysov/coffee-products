import {StoreUtils} from '@@shared/utils/store.utils';
import {UiLockerState} from '@@ui-locker/models/ui-locker-state';
import {UiLockerActions} from '@@ui-locker/store/ui-locker.action';
import {UiLockerSelectors} from '@@ui-locker/store/ui-locker.selectors';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UiLockerReduxFacade {

  locked$: Observable<boolean> = this.store.pipe(select(UiLockerSelectors.locked));

  constructor(private store: Store) {}

  getState(): UiLockerState {
    return StoreUtils.getSync(this.store, UiLockerSelectors.getState);
  }

  incrementPendingRequests() {
    this.store.dispatch(UiLockerActions.incrementPendingRequests());
  }

  decrementPendingRequests() {
    this.store.dispatch(UiLockerActions.decrementPendingRequests());
  }
}
