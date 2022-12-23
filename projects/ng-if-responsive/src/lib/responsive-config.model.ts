import { InjectionToken } from '@angular/core';

export const RESPONSIVE_NG_IF_CONFIG = new InjectionToken<{
  [key: string]: number;
}>('Responsive breakpoints configuration');
