import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PageSizeConfig {
  pageSizes = [10, 20, 50];
}
