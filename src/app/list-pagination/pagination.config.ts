import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PaginationConfig {
  itemsPerPage = 10;
  maxSize = 3;
  firstText = '«';
  previousText = '‹';
  nextText = '›';
  lastText = '»';
}
