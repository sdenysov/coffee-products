import {CustomRouterStateSerializer} from '@@router/custom-router-state-serializer';
import {ROUTE_STORE_KEY} from '@@router/store/router-store.config';
import {NgModule} from '@angular/core';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';

@NgModule({
  imports: [
    StoreModule.forFeature(ROUTE_STORE_KEY, routerReducer),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouterStateSerializer
    })
  ],
  exports: [StoreRouterConnectingModule]
})
export class AppRouterModule {}
