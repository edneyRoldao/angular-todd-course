
import { Component } from '@angular/core';
import {Passenger} from './passenger.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container" style="margin-top: 10px; margin-bottom: 30px">
      <div class="jumbotron">

        <h3 style="text-align: center">ngClass and className bindings</h3>
        
      </div>
    </div>
    
    <div class="container">
      <h5>Airline Passengers</h5>

      exemplo que add apenas uma classe css dinamicamente
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullName }}
        </li>
      </ul>

      <hr>

      Nesse exemplo podemos adicionar multiplas classes css dinamicamente
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          
          <span [ngClass]="{
            'status': true,
            'checked-in': passenger.checkedIn 
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

