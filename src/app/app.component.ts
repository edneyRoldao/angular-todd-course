
import { Component } from '@angular/core';
import {log} from 'util';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container" style="margin-top: 10px">
      <div class="jumbotron">
        <h1> {{ app }} </h1>
        
        <input class="form-control" 
               type="text"
               [value]="name"
               (input)="inputHandler($event)"
               (blur)="handleBlur($event)">
        
        <hr>
        <div class="btn btn-info" (click)="handleClick()">Test EventBinding</div>
        
        <hr>
        {{ name }}
        
      </div>
    </div>
  `
})
export class AppComponent {

  name = 'edney';
  app = 'angular study';

  constructor() {
  }

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  inputHandler(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = 'edney roldao';
  }

}

