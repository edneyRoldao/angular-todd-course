
import { Component } from '@angular/core';
import {Passenger} from './passenger.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container" style="margin-top: 10px; margin-bottom: 30px">
      <div class="jumbotron">

        <h3>ng-for, iteranting collections and Interfaces to represent our models</h3>
        
      </div>
    </div>
    
    <div class="container">
      <h5 style="text-align: center">Airline Passengers</h5>
      <ul>
    
        <li *ngFor="let passenger of passengers">
          {{ passenger.fullName }}
        </li>

        <hr>
        
        Acessando o index do array
        <li *ngFor="let passenger of passengers; let i = index;">
          {{ i }}: {{ passenger.fullName }}
        </li>
        
        <hr>
        
        Sem sugar syntax
        <ng-template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li>
            {{ i }}: {{ passenger.fullName }}
          </li>
        </ng-template>
        
      </ul>
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

