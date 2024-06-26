import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent implements OnDestroy {
  componentDestroyed$ = new Subject<void>()
  intervalUpdate: any = null

  constructor() {}

  /** Emit null when components gets destroyed. Unsubscribe from Observables. */
  ngOnDestroy(): void {
    this.componentDestroyed$.next()
    this.componentDestroyed$.complete()
    if (this.intervalUpdate) {
      clearInterval(this.intervalUpdate)
      this.intervalUpdate = 0
    }
  }

}
