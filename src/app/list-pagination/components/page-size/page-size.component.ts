import {PageSizeConfig} from '@@app/list-pagination/page-size.config';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-size',
  templateUrl: 'page-size.component.html',
  styleUrls: ['page-size.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageSizeComponent implements OnInit {

  @Input() pageSize!: number;
  @Input() pageSizes!: number[];
  @Output() pageSizeChanged: EventEmitter<number>;

  constructor(private config: PageSizeConfig) {
    this.pageSizeChanged = new EventEmitter<number>();
  }

  ngOnInit() {
    this.pageSizes = this.pageSizes ? this.pageSizes : this.config.pageSizes;
    this.pageSize = this.pageSize ? this.pageSize : this.pageSizes[0];
  }

  changePageSizeAndHideDropdown(pageSize: number) {
    this.pageSize = pageSize;
    this.pageSizeChanged.emit(this.pageSize);
  }
}
