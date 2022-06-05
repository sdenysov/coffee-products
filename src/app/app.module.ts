import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AppReduxModule} from '@@app/app-redux.module';
import {AppRoutingModule} from '@@app/app-routing.module';
import {AppComponent} from '@@app/app.component';
import {AppCoffeeProductListModule} from '@@coffee-product-list/coffee-product-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    AppReduxModule,
    AppCoffeeProductListModule,
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
