
import { Component } from '@angular/core';
import {log} from 'util';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container" style="margin-top: 10px">
      <div class="jumbotron">
        
        NgModel Sem TWD: - 
        <input class="form-control" 
               type="text" [ngModel]="name1">
        <hr>

        NgModel Com TWD: -
        <input class="form-control"
               type="text" [(ngModel)]="name2">
        
        <hr>
        
        {{ 'sem TWD: ' + name1 }} <br>
        {{ 'com TWD: ' + name2 }}
        
      </div>
    </div>
  `
})
export class AppComponent {

  name1 = 'edney';
  name2 = 'edney';

  constructor() {
  }

}

