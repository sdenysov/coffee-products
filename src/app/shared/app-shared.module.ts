import {FooterComponent} from '@@shared/components/footer/footer.component';
import {HeaderComponent} from '@@shared/components/header/header.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

const SHARED_DECLARATIONS_AND_EXPORTS = [FooterComponent, HeaderComponent];

@NgModule({
  declarations: [SHARED_DECLARATIONS_AND_EXPORTS],
  exports: [SHARED_DECLARATIONS_AND_EXPORTS],
  imports: [RouterModule],
  providers: []
})
export class AppSharedModule {}
