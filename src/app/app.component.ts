import {CoffeeProductsActions} from '@@store/coffee-products.actions';
import { Component } from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Actions, ofType} from '@ngrx/effects';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coffee-products';
  errorDataFetchVisible = false;

  constructor(private actions$: Actions) {
    this.actions$.pipe(
      ofType(CoffeeProductsActions.fetchFailed),
      untilDestroyed(this)
    ).subscribe(() => this.errorDataFetchVisible = true)
  }
}
