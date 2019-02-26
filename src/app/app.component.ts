import { Component } from '@angular/core';
import { Nav } from './nav.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div style="margin-top: 10px">

      <a *ngFor="let item of nav"
         [routerLink]="item.link" 
         routerLinkActive="css-class-name" 
         [routerLinkActiveOptions]="{ exact: item.exact }">
        {{ item.name }} &nbsp;&nbsp;
      </a> 
      
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

  nav: Nav[] = [
    { link: '/', name: 'Home', exact: true },
    { link: '/oops', name: '404', exact: false }
  ];

}

