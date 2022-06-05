import {UrlSegments} from '@@core/config/url-segments';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoffeeProductsInitialDataResolver} from './resolvers/coffee-products-initial-data-resolver';

const routes: Routes = [
  {path: '**', redirectTo: `${UrlSegments.contextPath}/list`},
  {
    path: UrlSegments.contextPath,
    resolve: {initialData: CoffeeProductsInitialDataResolver},
    children: [
      {
        path: 'list',
        loadChildren: () => import('./pages/coffee-product-list/coffee-product-list.module').then(m => m.AppCoffeeProductListModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
