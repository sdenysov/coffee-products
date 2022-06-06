import {
  CoffeeProductDetailsComponent
} from '@@coffee-product-details/components/product-details/coffee-product-details.component';
import {ImageDirective} from '@@coffee-product-details/directives/image.directive';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '', component: CoffeeProductDetailsComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CoffeeProductDetailsComponent, ImageDirective]
})

export class AppCoffeeProductDetailsModule {}
