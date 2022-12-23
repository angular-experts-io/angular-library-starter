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
  selector: '[ngIfResponsiveRender]',
  standalone: true,
})
export class NgIfResponsiveRenderDirective implements OnInit, OnDestroy {
  @Input() ngIfResponsiveRender!: string | number;

  private config = inject(RESPONSIVE_NG_IF_CONFIG, { optional: true });
  private destroy$ = new Subject<void>();

  constructor(
    private responsiveService: ResponsiveService,
    private configService: ConfigService,
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    const breakPoint = this.configService.getBreakPointFromConfig(
      this.config,
      this.ngIfResponsiveRender
    );
    if (!breakPoint) {
      return;
    }

    this.responsiveService
      .isScreenBiggerThanBreakpoint(breakPoint)
      .pipe(takeUntil(this.destroy$))
      .subscribe((isBigger) => {
        if (isBigger) {
          this.view.createEmbeddedView(this.template);
        } else {
          this.view.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
