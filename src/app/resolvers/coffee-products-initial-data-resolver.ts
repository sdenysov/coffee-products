import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CoffeeProductsReduxFacade} from '@@store/coffee-products-redux.facade';

const PRODUCTS_LIMIT = 50;

@Injectable({providedIn: 'root'})
export class CoffeeProductsInitialDataResolver implements Resolve<any> {

  constructor(private coffeeProductsReduxFacade: CoffeeProductsReduxFacade) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    return this.coffeeProductsReduxFacade.fetchCoffeeProducts(PRODUCTS_LIMIT);
  }
}
