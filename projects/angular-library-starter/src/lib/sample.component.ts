import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AngularLibraryStarterSampleService } from './sample.service';

@Component({
  selector: 'angular-library-starter-sample',
  template: `<h1>
    The best framework is {{ sampleService.getBestFramework() }}
  </h1>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularLibraryStarterSampleComponent {
  constructor(public sampleService: AngularLibraryStarterSampleService) {}
}
