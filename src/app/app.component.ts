
import { Component } from '@angular/core';
import {Passenger} from './passenger-dashboard/models/passenger.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container" style="margin-top: 10px; margin-bottom: 30px">
      <div class="jumbotron">

        <h3 style="text-align: center"> NgOnChanges lifecycle hook </h3>
        
      </div>
    </div>
    
    <app-passenger-dashboard></app-passenger-dashboard>
    
  `
})
export class AppComponent { }

