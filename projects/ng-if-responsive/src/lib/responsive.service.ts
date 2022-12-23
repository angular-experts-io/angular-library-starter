import { Injectable } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/overlay';
import { distinctUntilChanged, map, Observable, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  constructor(private viewPortRuler: ViewportRuler) {}

  public isScreenBiggerThanBreakpoint(
    breakPointWidth: number
  ): Observable<boolean> {
    return this.viewPortRuler.change().pipe(
      startWith(this.viewPortRuler.getViewportSize().width),
      map(() => this.viewPortRuler.getViewportSize().width),
      map((screenWidth) => screenWidth > breakPointWidth),
      distinctUntilChanged()
    );
  }
}
