import {UiLockerState} from '@@ui-locker/models/ui-locker-state';
import {UiLockerReduxFacade} from '@@ui-locker/store/ui-locker-redux.facade';
import {UiLockerActions} from '@@ui-locker/store/ui-locker.action';
import {initialState, uiLockerReducer} from '@@ui-locker/store/ui-locker.reducer';
import {UI_LOCKER_STATE_KEY} from '@@ui-locker/store/ui-store.config';
import {TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';

describe('UiLocker', () => {

  let store: Store<{ [UI_LOCKER_STATE_KEY]: UiLockerState }>;
  let storeFacade: UiLockerReduxFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({[UI_LOCKER_STATE_KEY]: uiLockerReducer})
      ],
      providers: [UiLockerReduxFacade],
    });
    store = TestBed.inject(Store);
    storeFacade = TestBed.inject(UiLockerReduxFacade);
  });

  it('should return the initial state', () => {
    expect(storeFacade.getState()).toEqual(initialState);
  });

  it('should increase pending request count', () => {
    store.dispatch(UiLockerActions.incrementPendingRequests());
    const state: UiLockerState = storeFacade.getState();
    expect(state.pendingRequestsCount).toBe(1);
    expect(state.locked).toBe(true);
  });

  it('should increase and decrease pending request count', () => {
    store.dispatch(UiLockerActions.decrementPendingRequests());
    const state: UiLockerState = storeFacade.getState();
    expect(state.pendingRequestsCount).toBe(0);
    expect(state.locked).toBe(false);
  });

  it('should not decrease pending request count below 0', () => {
    store.dispatch(UiLockerActions.incrementPendingRequests());
    store.dispatch(UiLockerActions.decrementPendingRequests());
    store.dispatch(UiLockerActions.incrementPendingRequests());
    store.dispatch(UiLockerActions.incrementPendingRequests());
    store.dispatch(UiLockerActions.decrementPendingRequests());
    store.dispatch(UiLockerActions.decrementPendingRequests());
    const state: UiLockerState = storeFacade.getState();
    expect(state.pendingRequestsCount).toBe(0);
    expect(state.locked).toBe(false);
  });

  it('should lock screen when pending requests count more then 0', () => {
    store.dispatch(UiLockerActions.incrementPendingRequests());
    const state: UiLockerState = storeFacade.getState();
    expect(state.pendingRequestsCount).toBe(1);
    expect(state.locked).toBe(true);
  });
});
