import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {CoffeeProductsRestService} from '@@core/rest/coffee-products-rest.service';
import {CoffeeProduct} from '@@shared/models/coffee-product';
import {CoffeeProductsActions} from './coffee-products.actions';

@Injectable()
export class CoffeeProductsEffects {

  constructor(private actions$: Actions,
              private coffeeProductsRestService: CoffeeProductsRestService) {
  }

  fetchProducts$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CoffeeProductsActions.fetch),
    mergeMap(action => this.coffeeProductsRestService.get$(action.limit).pipe(
      map((products: CoffeeProduct[]) => CoffeeProductsActions.fetchSucceed({products}))
    ))
  ));
}
