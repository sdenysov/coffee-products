import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoffeeProductListItemComponent} from './components/product-list-item/coffee-product-list-item.component';
import {CoffeeProductListComponent} from './components/product-list/coffee-product-list.component';

const routes: Routes = [{
  path: '', component: CoffeeProductListComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [CoffeeProductListComponent, CoffeeProductListItemComponent]
})

export class AppCoffeeProductListModule {}
