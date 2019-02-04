
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container" style="margin-top: 10px">
      <div class="jumbotron">
        
        {{ title }}
        
        <div>
          {{ numberOne + numberTwo }}
        </div>
        
        <div>
          {{ isHappy ? ':)' : ':(' }}
        </div>
        
        <div>
          {{ 'Welcome to ' + app }}
        </div>
        
      </div>
    </div>
  `
})
export class AppComponent {

  app = 'angular study';
  title: string;
  numberOne = 1;
  numberTwo = 2;
  isHappy = true;

  constructor() {
    this.title = 'interpolation and expressions samples';
  }

}

