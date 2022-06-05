import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {PageChangedEvent} from 'ngx-bootstrap/pagination/pagination.component';

@Component({
  selector: 'app-list-pagination',
  templateUrl: 'list-pagination.component.html',
  styleUrls: ['list-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPaginationComponent {

  @Input() totalItems!: number;
  @Input() itemsPerPage!: number;
  @Input() pageNumber!: number;
  @Input() pageSize!: number;
  @Input() pageSizes!: number[];
  @Output() pageChanged: EventEmitter<PageChangedEvent>;
  @Output() pageSizeChange: EventEmitter<number>;

  constructor() {
    this.pageChanged = new EventEmitter<PageChangedEvent>();
    this.pageSizeChange = new EventEmitter<number>();
  }

  isPaginationVisible(): boolean {
    if (!this.totalItems || !this.itemsPerPage) {
      return false;
    }
    return this.itemsPerPage < this.totalItems;
  }
}
