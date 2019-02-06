
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container" style="margin-top: 10px">
      <div class="jumbotron">
        
        <h1> {{ app }} </h1>
        
        <!-- property binding -->
        <h1 [innerHTML]="app"></h1>
        <img [src]="resident">
        <br>
        <input class="form-control" type="text" [value]="app">
        
      </div>
    </div>
  `
})
export class AppComponent {
  resident = 'assets/img/imagem.jpeg';
  app = 'angular study';
  title: string;

  constructor() {
    this.title = 'interpolation and expressions samples';
  }

}

