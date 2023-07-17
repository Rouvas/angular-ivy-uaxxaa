import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
    <li><a routerLink="/page1">Page 1</a></li>
    <li><a routerLink="/page2">Page 2</a></li>
    <li><a routerLink="/lazy">Page Lazy</a></li>
  </ul>

  <router-outlet></router-outlet>
`,
})
export class AppComponent {}
