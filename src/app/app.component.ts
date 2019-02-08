
import { Component } from '@angular/core';
import {log} from 'util';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container" style="margin-top: 10px">
      <div class="jumbotron">

        <h1>Template Ref Variables</h1>
        
        <input class="form-control" type="text" #username>
        
        <div style="margin-top: 10px" class="btn btn-dark" (click)="clickHandler(username.value)">
          Get Value
        </div>
        
        <hr>
        {{ name }}
        
      </div>
    </div>
  `
})
export class AppComponent {
  name: string;

  constructor() {
  }

  clickHandler(valor: string) {
    this.name = valor;
  }

}

