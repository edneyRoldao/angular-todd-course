import {Component, OnInit} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.css'],
  template: `
    <div>
      <div class="container">
        <h5>Airline Passengers</h5>
        
        <hr>
        <app-passenger-count [passengersList]="passengers"></app-passenger-count>
        
        <hr>
        <app-passenger-detail *ngFor="let passenger of passengers" 
                              [passengerDetail]="passenger"
                              (edit)="handleEdit($event)"
                              (remove)="handleRemove($event)">
        </app-passenger-detail>
        
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

  handleRemove(event: Passenger) {
    console.log(event);
    this.passengers = this.passengers.filter(p => p.id !== event.id);
  }

  handleEdit(event: Passenger) {

    this.passengers = this.passengers.map(p => {

      if (p.id === event.id) {
        p = Object.assign({}, p, event);
      }

      return p;
    });

    console.log(this.passengers);
  }

}
