import {
  Directive,
  inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ResponsiveService } from './responsive.service';
import { RESPONSIVE_NG_IF_CONFIG } from './responsive-config.model';
import { ConfigService } from './config.service';

@Directive({
  selector: '[ngIfResponsiveRemove]',
  standalone: true,
})
export class NgIfResponsiveRemoveDirective implements OnInit, OnDestroy {
  @Input() ngIfResponsiveRemove!: string | number;

  private destroy$ = new Subject<void>();
  private config = inject(RESPONSIVE_NG_IF_CONFIG, { optional: true });

  constructor(
    private responsiveService: ResponsiveService,
    private configService: ConfigService,
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    const breakPoint = this.configService.getBreakPointFromConfig(
      this.config,
      this.ngIfResponsiveRemove
    );
    if (!breakPoint) {
      return;
    }

    this.responsiveService
      .isScreenBiggerThanBreakpoint(breakPoint)
      .pipe(takeUntil(this.destroy$))
      .subscribe((isBigger) => {
        if (isBigger) {
          this.view.clear();
        } else {
          this.view.createEmbeddedView(this.template);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
