import {CoffeeProduct} from '@@shared/models/coffee-product';
import {UiLocking} from '@@ui-locker/decorators/ui-locker.decorator';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CoffeeProductsRestService {

  constructor(private http: HttpClient) {}

  @UiLocking()
  get$(limit: number): Observable<CoffeeProduct[]> {
    return this.http.get<CoffeeProduct[]>(`https://random-data-api.com/api/coffee/random_coffee?size=${limit}`);
  }
}
