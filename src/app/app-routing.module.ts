import {UrlSegments} from '@@core/config/url-segments';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoffeeProductsInitialDataResolver} from './resolvers/coffee-products-initial-data-resolver';

const routes: Routes = [
  {
    path: UrlSegments.contextPath,
    resolve: {initialData: CoffeeProductsInitialDataResolver},
    children: [
      {
        path: 'list',
        loadChildren: () => import('./pages/coffee-product-list/coffee-product-list.module').then(m => m.AppCoffeeProductListModule)
      },
      {
        path: 'details/:id',
        loadChildren: () => import('./pages/coffee-product-details/coffee-product-details.module').then(m => m.AppCoffeeProductDetailsModule)
      },
    ]
  },
  {path: '**', redirectTo: `${UrlSegments.contextPath}/list`},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
