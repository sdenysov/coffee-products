import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CoffeeProduct} from '@@shared/models/coffee-product';

@Injectable({providedIn: 'root'})
export class CoffeeProductsRestService {

  constructor(private http: HttpClient) {}

  get$(limit: number): Observable<CoffeeProduct[]> {
    return this.http.get<CoffeeProduct[]>(`https://random-data-api.com/api/coffee/random_coffee?size=${limit}`);
  }
}
