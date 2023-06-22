import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-menu></app-menu>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'angular-injecao-de-dependencia';
}
