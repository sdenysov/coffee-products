import {COFFEE_PRODUCTS_LIST_STORE_KEY} from '@@coffee-product-list/store/coffee-product-list-store.config';
import {coffeeProductListReducer} from '@@coffee-product-list/store/coffee-product-list.reducer';
import {AppListPaginationModule} from '@@list-pagination/app-list-pagination.module';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {CoffeeProductListItemComponent} from './components/product-list-item/coffee-product-list-item.component';
import {CoffeeProductListComponent} from './components/product-list/coffee-product-list.component';

const routes: Routes = [{
  path: '', component: CoffeeProductListComponent
}]

@NgModule({
  imports: [
    AppListPaginationModule,
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COFFEE_PRODUCTS_LIST_STORE_KEY, coffeeProductListReducer)
  ],
  declarations: [CoffeeProductListComponent, CoffeeProductListItemComponent]
})

export class AppCoffeeProductListModule {}
