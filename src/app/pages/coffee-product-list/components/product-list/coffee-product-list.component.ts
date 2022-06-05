import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {filter} from 'rxjs';
import {CoffeeProduct} from '@@shared/models/coffee-product';
import {CoffeeProductsReduxFacade} from '@@store/coffee-products-redux.facade';

@UntilDestroy()
@Component({
  selector: 'app-coffee-product-list',
  templateUrl: './coffee-product-list.component.html',
  styleUrls: ['./coffee-product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoffeeProductListComponent implements OnInit {

  public coffeeProducts: CoffeeProduct[];

  constructor(private coffeeProductsReduxFacade: CoffeeProductsReduxFacade,
              private cdr: ChangeDetectorRef) {
    this.coffeeProducts = [];
  }

  ngOnInit(): void {
    this.coffeeProductsReduxFacade.coffeeProducts$
      .pipe(
        filter((products: CoffeeProduct[]) => products.length > 0),
        untilDestroyed(this)
      )
      .subscribe((products: CoffeeProduct[]) => {
        this.coffeeProducts = products;
        this.cdr.detectChanges();
      })
  }

  trackByProductId(index: number, product: CoffeeProduct) {
    return product.id;
  }
}
