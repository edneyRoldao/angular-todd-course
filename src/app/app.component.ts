import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div style="margin-top: 10px">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }

