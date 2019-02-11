
import { Component } from '@angular/core';
import {Passenger} from './passenger.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container" style="margin-top: 10px; margin-bottom: 30px">
      <div class="jumbotron">

        <h3 style="text-align: center">ngStyle and style bindings</h3>
        
      </div>
    </div>
    
    <div class="container">
      <h5>Airline Passengers</h5>
      
      exemplo que aplica apenas um attr css
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" 
                [style.background]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')"></span>
          {{ i }}: {{ passenger.fullName }}
        </li>
      </ul>

      <hr>

      exemplo que aplica multi attrs css
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
                [ngStyle]="{
                  background: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
                }"></span>
          {{ i }}: {{ passenger.fullName }}
        </li>
      </ul>
      
      <hr>
      <h6> when passenger is checkedIn <span class="status checked-in"></span></h6>
      <h6> when passenger is not checkedIn <span class="status"></span></h6>
      
    </div>
    
  `
})
export class AppComponent {

  passengers: Passenger[] = [
    {
      id: 1,
      fullName: 'edney',
      checkedIn: true
    },
    {
      id: 2,
      fullName: 'giselle',
      checkedIn: false
    },
    {
      id: 3,
      fullName: 'marjorie',
      checkedIn: true
    },
    {
      id: 4,
      fullName: 'nadine',
      checkedIn: false
    },
    {
      id: 5,
      fullName: 'draco',
      checkedIn: false
    }
  ];

  constructor() {
  }


}

