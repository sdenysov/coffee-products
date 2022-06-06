import {UrlSegments} from '@@core/config/url-segments';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class CoffeeProductsNavigationService {

  constructor(private router: Router) {}

  goToList(): void {
    this.router.navigate([`/${UrlSegments.contextPath}/list`]);
  }

  goToProductDetails(productId: string): void {
    this.router.navigate([`/${UrlSegments.contextPath}/details`, productId]);
  }
}
