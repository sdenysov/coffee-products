import {FullScreenLockerComponent} from '@@ui-locker/components/full-screen-locker/full-screen-locker.component';
import {uiLockerReducer} from '@@ui-locker/store/ui-locker.reducer';
import {UI_LOCKER_STATE_KEY} from '@@ui-locker/store/ui-store.config';
import {CommonModule} from '@angular/common';
import {Injector, NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(UI_LOCKER_STATE_KEY, uiLockerReducer)
  ],
  declarations: [FullScreenLockerComponent],
  exports: [FullScreenLockerComponent]
})
export class AppUiLockerModule {

  static coreInjector: Injector;

  constructor(private injector: Injector) {
    AppUiLockerModule.coreInjector = injector;
  }
}
