import {CoffeeProductListState} from '@@coffee-product-list/models/coffee-product-list-state';
import {CoffeeProductListReduxFacade} from '@@coffee-product-list/store/coffee-product-list-redux.facade';
import {CoffeeProductsNavigationService} from '@@router/services/coffee-products-navigation.service';
import {CoffeeProduct} from '@@shared/models/coffee-product';
import {CoffeeProductsReduxFacade} from '@@store/coffee-products-redux.facade';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {PageChangedEvent} from 'ngx-bootstrap/pagination/pagination.component';
import {filter} from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-coffee-product-list',
  templateUrl: './coffee-product-list.component.html',
  styleUrls: ['./coffee-product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoffeeProductListComponent implements OnInit, OnDestroy {

  public coffeeProducts!: CoffeeProduct[];
  public productsLimit!: number;
  public pageNumber!: number;
  public totalProductsCount!: number;
  public productListPaginationVisible!: boolean;

  constructor(private coffeeProductsReduxFacade: CoffeeProductsReduxFacade,
              private coffeeProductListReduxFacade: CoffeeProductListReduxFacade,
              private coffeeProductsNavigationService: CoffeeProductsNavigationService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.initCoffeeProductsSub();
    this.initCoffeeProductListStateSub();
  }

  onPageChanged(event: PageChangedEvent): void {
    this.coffeeProductListReduxFacade.updateListPageData(event.page);
  }

  onPageSizeChanged(pageSize: number): void {
    this.coffeeProductListReduxFacade.updateListPageSize(pageSize);
  }

  trackByProductId(index: number, product: CoffeeProduct) {
    return product.id;
  }

  goToCoffeeProductDetails(productId: string): void {
    this.coffeeProductsNavigationService.goToProductDetails(productId);
  }

  ngOnDestroy(): void {
    this.coffeeProductListReduxFacade.resetState();
  }

  private initCoffeeProductListStateSub(): void {
    this.coffeeProductListReduxFacade.state$
      .pipe(
        filter((state: CoffeeProductListState) => state.pageProducts.length > 0),
        untilDestroyed(this)
      )
      .subscribe((state: CoffeeProductListState) => {
        this.productListPaginationVisible = state.paginationVisible;
        this.coffeeProducts = state.pageProducts;
        this.productsLimit = state.limit;
        this.totalProductsCount = state.totalProductsCount;
        this.pageNumber = state.pageNumber;
        this.cdr.detectChanges();
      })
  }

  private initCoffeeProductsSub(): void {
    this.coffeeProductsReduxFacade.coffeeProducts$
      .pipe(
        filter((products: CoffeeProduct[]) => products.length > 0),
        untilDestroyed(this)
      )
      .subscribe(products => this.coffeeProductListReduxFacade.setInitialData(products));
  }
}
