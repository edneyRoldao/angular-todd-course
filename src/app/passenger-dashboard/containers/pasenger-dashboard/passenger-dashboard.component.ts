import {Component, OnInit} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.css'],
  template: `
    <div>
      <div class="container">
        <h5>Airline Passengers</h5>

        <!-- novos components -->
        <app-passenger-count></app-passenger-count>
        <app-passenger-detail></app-passenger-detail>
        
        <hr>
        
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
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  ngOnInit() {

    console.log('ngOnInit is working properly');

    this.passengers = [
      {
        id: 1,
        fullName: 'edney',
        checkedIn: true,
        checkInDate: 1623514352345,
        children: [
          {name: 'marjorie', age: 3},
          {name: 'nadine', age: 16}
        ]
      },
      {
        id: 2,
        fullName: 'giselle',
        checkedIn: false,
        checkInDate: null,
        children: [
          {name: 'marjorie', age: 3},
          {name: 'nadine', age: 16}
        ]
      },
      {
        id: 3,
        fullName: 'marjorie',
        checkedIn: true,
        checkInDate: 1623514352345,
        children: null
      },
      {
        id: 4,
        fullName: 'nadine',
        checkedIn: false,
        checkInDate: null,
        children: null
      },
      {
        id: 5,
        fullName: 'draco',
        checkedIn: false,
        checkInDate: null,
        children: null
      }
    ];
  }

}
