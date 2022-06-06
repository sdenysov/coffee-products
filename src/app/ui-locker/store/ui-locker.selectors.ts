import {UiLockerState} from '@@ui-locker/models/ui-locker-state';
import {UI_LOCKER_STATE_KEY} from '@@ui-locker/store/ui-store.config';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export namespace UiLockerSelectors {
  export const getState = createFeatureSelector<UiLockerState>(UI_LOCKER_STATE_KEY);
  export const locked = createSelector(getState, state => state.locked);
}

