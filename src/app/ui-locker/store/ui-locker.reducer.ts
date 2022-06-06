import {UiLockerState} from '@@ui-locker/models/ui-locker-state';
import {UiLockerActions} from '@@ui-locker/store/ui-locker.action';
import {createReducer, on} from '@ngrx/store';

export const initialState: UiLockerState = {
  pendingRequestsCount: 0,
  locked: false
};

export const uiLockerReducer = createReducer(
  initialState,
  on(UiLockerActions.incrementPendingRequests, (state) => {
    const pendingRequestsCount = state.pendingRequestsCount + 1;
    return {...state, pendingRequestsCount, locked: true}
  }),
  on(UiLockerActions.decrementPendingRequests, (state) => {
    const pendingRequestsCount = Math.max(0, state.pendingRequestsCount - 1);
    return {...state, pendingRequestsCount, locked: pendingRequestsCount > 0}
  }),
)
