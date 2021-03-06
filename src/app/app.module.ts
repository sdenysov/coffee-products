import {AppReduxModule} from '@@app/app-redux.module';
import {AppRoutingModule} from '@@app/app-routing.module';
import {AppComponent} from '@@app/app.component';
import {AppCoffeeProductDetailsModule} from '@@coffee-product-details/coffee-product-details.module';
import {AppCoffeeProductListModule} from '@@coffee-product-list/coffee-product-list.module';
import {DependencyInjectorService} from '@@core/services/dependency-injector.service';
import {AppListPaginationModule} from '@@list-pagination/app-list-pagination.module';
import {AppRouterModule} from '@@router/app-router.module';
import {AppSharedModule} from '@@shared/app-shared.module';
import {AppUiLockerModule} from '@@ui-locker/ui-locker.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AlertModule} from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    AppUiLockerModule,
    AppRoutingModule,
    AppReduxModule,
    AppRouterModule,
    AppListPaginationModule,
    AppCoffeeProductListModule,
    AppCoffeeProductDetailsModule,
    AppSharedModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private dependencyInjectorService: DependencyInjectorService) {}
}
