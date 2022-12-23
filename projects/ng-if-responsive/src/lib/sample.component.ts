import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NgIfResponsiveSampleService } from './sample.service';

@Component({
  selector: 'ng-if-responsive-sample',
  template: `<h1>
    The best framework is {{ sampleService.getBestFramework() }}
  </h1>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgIfResponsiveSampleComponent {
  constructor(public sampleService: NgIfResponsiveSampleService) {}
}
