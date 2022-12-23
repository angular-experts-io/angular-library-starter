import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  public getBreakPointFromConfig(
    config: { [key: string]: number } | null,
    breakPoint: string | number
  ): number | null {
    if (typeof breakPoint === 'string') {
      if (!config) {
        console.error(
          'Please provide a breakpoint configuration via the RESPONSIVE_NG_IF_CONFIG injection token'
        );
        return null;
      }

      if (!config.hasOwnProperty(breakPoint)) {
        console.error(
          `Couldn't find a breakpoint named ${breakPoint} in the configuration provided via the RESPONSIVE_NG_IF_CONFIG injecton token`
        );
        return null;
      }
      return config[breakPoint];
    } else {
      return breakPoint;
    }
  }
}
