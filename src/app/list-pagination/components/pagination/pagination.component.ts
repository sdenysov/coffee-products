import {PaginationConfig} from '@@app/list-pagination/pagination.config';
import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {PageChangedEvent} from 'ngx-bootstrap/pagination/pagination.component';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit {

  prevItemsPerPage!: number;
  prevPageNumber!: number;
  maxSize!: number;
  totalPageCount!: number;
  @Input() disabled!: boolean;
  @Input() totalItems!: number;
  @Input() firstText!: string;
  @Input() previousText!: string;
  @Input() nextText!: string;
  @Input() lastText!: string;
  @Input() itemsPerPage!: number;
  @Input() pageNumber!: number;
  @Output() pageChanged: EventEmitter<PageChangedEvent>;

  constructor(private config: PaginationConfig, private cdr: ChangeDetectorRef) {
    this.pageChanged = new EventEmitter<PageChangedEvent>();
  }

  ngOnInit() {
    this.maxSize = this.config.maxSize;
    this.firstText = typeof this.firstText !== 'undefined' ? this.firstText : this.config.firstText;
    this.previousText = typeof this.previousText !== 'undefined' ? this.previousText : this.config.previousText;
    this.nextText = typeof this.nextText !== 'undefined' ? this.nextText : this.config.nextText;
    this.lastText = typeof this.lastText !== 'undefined' ? this.lastText : this.config.lastText;
    this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : this.config.itemsPerPage;
    this.prevItemsPerPage = this.itemsPerPage;
  }

  onPageChanged(event: PageChangedEvent) {
    if (this.prevPageNumber > this.totalPageCount) {
      this.prevPageNumber = event.page;
      return;
    }
    if (event.page !== this.pageNumber && event.itemsPerPage === this.prevItemsPerPage) {
      this.pageChanged.emit(event);
    }
    this.prevPageNumber = event.page;
  }

  onNumPagesChanged(pageCount: number): void {
    this.totalPageCount = pageCount;
    const lastPrevPageItem = Math.min(this.totalItems, this.prevItemsPerPage * this.pageNumber);
    const newPageNumber = Math.ceil(lastPrevPageItem / this.itemsPerPage);
    if (pageCount > newPageNumber) {
      this.pageNumber = newPageNumber;
    }
    if (pageCount === newPageNumber) {
      this.pageChanged.emit({page: newPageNumber, itemsPerPage: this.itemsPerPage});
    }
    this.prevItemsPerPage = this.itemsPerPage;
    this.cdr.detectChanges();
  }
}
