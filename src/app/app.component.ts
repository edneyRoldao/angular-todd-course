import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div style="margin-top: 10px">
      <a routerLink="/" 
         routerLinkActive="active" 
         [routerLinkActiveOptions]="{ exact: true }">
        Home
      </a> - 
      <a routerLink="/oops" 
         routerLinkActive="active">
        404
      </a>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }

