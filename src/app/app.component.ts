
import { Component } from '@angular/core';
import {Passenger} from './passenger.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container" style="margin-top: 10px; margin-bottom: 30px">
      <div class="jumbotron">

        <h3 style="text-align: center"> Pipes and data transformation </h3>
        
      </div>
    </div>
    
    <div class="container">
      <h5>Airline Passengers</h5>

      pipe de desenvolvimento (json)
      <ul>
        <!-- pipe para verificar a estrutura do objeto (pipe de desenvolvimento) -->
        <li *ngFor="let passenger of passengers">
          {{ passenger | json }}
        </li>
      </ul>
      
      <hr>

      pipe que transforma datas
      <ul>
        <li *ngFor="let passenger of passengers">
          {{ passenger.checkInDate | date: 'd / MMMM / y'  }}
        </li>
      </ul>
      
      <hr>

      pipe que transforma datas com ternario
      <ul>
        <li *ngFor="let passenger of passengers">
          {{ passenger.checkInDate ? (passenger.checkInDate | date: 'd / MMMM / y') : 'not checked in'  }}
        </li>
      </ul>

      <hr>

      Aplicando dois pipes (date e uppercase
      <ul>
        <li *ngFor="let passenger of passengers">
          {{ passenger.checkInDate | date: 'd / MMMM / y' | uppercase }}
        </li>
      </ul>


    </div>
  `
})
export class AppComponent {

  passengers: Passenger[] = [
    {
      id: 1,
      fullName: 'edney',
      checkedIn: true,
      checkInDate: 1623514352345
    },
    {
      id: 2,
      fullName: 'giselle',
      checkedIn: false,
      checkInDate: null
    },
    {
      id: 3,
      fullName: 'marjorie',
      checkedIn: true,
      checkInDate: 1623514352345
    },
    {
      id: 4,
      fullName: 'nadine',
      checkedIn: false,
      checkInDate: null
    },
    {
      id: 5,
      fullName: 'draco',
      checkedIn: false,
      checkInDate: null
    }
  ];

  constructor() {
  }


}

