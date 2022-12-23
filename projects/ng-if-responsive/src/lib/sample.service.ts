import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgIfResponsiveSampleService {
  public getBestFramework(): string {
    return 'Angular';
  }
}
