import {ListPaginationComponent} from '@@list-pagination/components/list-pagination/list-pagination.component';
import {PageSizeComponent} from '@@list-pagination/components/page-size/page-size.component';
import {PaginationComponent} from '@@list-pagination/components/pagination/pagination.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {PaginationModule} from 'ngx-bootstrap/pagination';

@NgModule({
	imports: [
		CommonModule,
		PaginationModule.forRoot(),
		BsDropdownModule.forRoot(),
		FormsModule
	],
  exports: [
    PageSizeComponent,
    PaginationComponent,
    ListPaginationComponent
  ],
  declarations: [
    PageSizeComponent,
    PaginationComponent,
    ListPaginationComponent
  ],
  providers: []
})
export class AppListPaginationModule {}
