import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <div class="container">
        <div class="row text-center">
          <div class="col-sm-8 mx-auto">
            <a class="header-brand" routerLink="" routerLinkActive="active" (click)="$event.preventDefault()" href="">
              Coffee Store
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
