import {CoffeeProductsNavigationService} from '@@router/services/coffee-products-navigation.service';
import {RouterReduxFacade} from '@@router/store/router-redux-facade.service';
import {CoffeeProduct} from '@@shared/models/coffee-product';
import {CoffeeProductsReduxFacade} from '@@store/coffee-products-redux.facade';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {filter, first} from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-coffee-product-details',
  templateUrl: './coffee-product-details.component.html',
  styleUrls: ['./coffee-product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoffeeProductDetailsComponent implements OnInit {

  public coffeeProduct!: CoffeeProduct;
  public coffeeNotes!: string[];
  public loaded!: boolean;

  constructor(private coffeeProductsReduxFacade: CoffeeProductsReduxFacade,
              private coffeeProductsNavigationService: CoffeeProductsNavigationService,
              private routerReduxFacade: RouterReduxFacade,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.initCoffeeProductSub();
  }

  goToProductList(): void {
    this.coffeeProductsNavigationService.goToList();
  }

  private initCoffeeProductSub(): void {
    const productId = this.routerReduxFacade.getCoffeeProductId();
    this.coffeeProductsReduxFacade.getCoffeeProductByUid$(productId)
      .pipe(
        filter(Boolean),
        first(),
        untilDestroyed(this)
      )
      .subscribe(product => {
        this.loaded = true;
        this.coffeeProduct = product;
        this.coffeeNotes = this.coffeeProduct.notes.split(',');
        this.cdr.detectChanges();
      });
  }
}
