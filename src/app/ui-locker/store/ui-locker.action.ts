import {createAction} from '@ngrx/store';

export enum UiLockerActionTypes {
  IncrementPendingRequests = '[UiLocker] increment pending requests',
  DecrementPendingRequests = '[UiLocker] decrement pending requests'
}

export namespace UiLockerActions {
  export const incrementPendingRequests = createAction(UiLockerActionTypes.IncrementPendingRequests);
  export const decrementPendingRequests = createAction(UiLockerActionTypes.DecrementPendingRequests);
}
