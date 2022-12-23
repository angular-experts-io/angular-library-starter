import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  configSetup = `
  providers: [
  {
      provide: RESPONSIVE_NG_IF_CONFIG,
      useValue: {
        sm: 640,
        md: 769,
        lg: 1024,
        xl: 1080
      }
  }]
  `;

  numberConfigRemove = `
  <h3 *ngIfResponsiveRemove="640">Hide on screens bigger than sm</h3>
  <h3 *ngIfResponsiveRemove="769">Hide on screens bigger than md</h3>
  <h3 *ngIfResponsiveRemove="1024">Hide on screens bigger than lg</h3>
  <h3 *ngIfResponsiveRemove="1280">Hide on screens bigger than xl</h3>
  `;

  numberConfigRender = `
  <h3 *ngIfResponsiveRender="640">Render on screens bigger than sm</h3>
  <h3 *ngIfResponsiveRender="769">Render on screens bigger than md</h3>
  <h3 *ngIfResponsiveRender="1024">Render on screens bigger than lg</h3>
  <h3 *ngIfResponsiveRender="1280">Render on screens bigger than xl</h3>
  `;

  configRemove = `
  <h3 *ngIfResponsiveRemove="'sm'">Hide on screens bigger than sm</h3>
  <h3 *ngIfResponsiveRemove="'md'">Hide on screens bigger than md</h3>
  <h3 *ngIfResponsiveRemove="'lg'">Hide on screens bigger than lg</h3>
  <h3 *ngIfResponsiveRemove="'xl'">Hide on screens bigger than xl</h3>
  `;

  configRender = `
  <h3 *ngIfResponsiveRender="'sm'">Render on sm and bigger</h3>
  <h3 *ngIfResponsiveRender="'md'">Render on md and bigger</h3>
  <h3 *ngIfResponsiveRender="'lg'">Render on lg and bigger</h3>
  <h3 *ngIfResponsiveRender="'xl'">Render on xl and bigger</h3>
  `;
}
