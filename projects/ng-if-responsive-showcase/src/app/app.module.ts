import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIf } from '@angular/common';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { NgIfResponsiveRemoveDirective } from '../../../ng-if-responsive/src/lib/ng-if-responsive-remove.directive';
import { NgIfResponsiveRenderDirective } from '../../../ng-if-responsive/src/lib/ng-if-responsive-render.directive';
import { RESPONSIVE_NG_IF_CONFIG } from '../../../ng-if-responsive/src/lib/responsive-config.model';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HighlightModule,
    NgIf,
    NgIfResponsiveRemoveDirective,
    NgIfResponsiveRenderDirective,
  ],
  providers: [
    {
      provide: RESPONSIVE_NG_IF_CONFIG,
      useValue: {
        sm: 640,
        md: 769,
        lg: 1024,
        xl: 1080,
      },
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: async () => await import('highlight.js'),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
