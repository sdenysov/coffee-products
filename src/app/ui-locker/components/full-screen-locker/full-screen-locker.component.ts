import {UiLockerReduxFacade} from '@@ui-locker/store/ui-locker-redux.facade';
import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-full-screen-locker',
  template: `
    <div class="fullscreen-block" *ngIf="locked">
      <div class="cs-loader">
        <div class="cs-loader-inner">
          <label> &#9679;</label>
          <label> &#9679;</label>
          <label> &#9679;</label>
          <label> &#9679;</label>
          <label> &#9679;</label>
          <label> &#9679;</label>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['full-screen-locker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FullScreenLockerComponent implements AfterViewInit {

  public locked!: boolean;
  public activeElement!: HTMLElement;

  constructor(private uiLockerStoreFacade: UiLockerReduxFacade,
              private cdr: ChangeDetectorRef) {
  }


  ngAfterViewInit() {
    const noopKeyDownHandler = (event: KeyboardEvent) => {
      event.preventDefault();
    };

    this.locked = false;
    this.uiLockerStoreFacade.locked$
      .pipe(untilDestroyed(this))
      .subscribe((locked: boolean) => {
        if (locked) {
          document.addEventListener('keydown', noopKeyDownHandler);
        } else {
          document.removeEventListener('keydown', noopKeyDownHandler);
        }
        this.locked = locked;
        if (locked) {
          this.activeElement = document.activeElement as HTMLElement;
        } else {
          if (this.activeElement) {
            this.activeElement.focus();
          }
        }
        this.cdr.detectChanges();
      });
  }
}

