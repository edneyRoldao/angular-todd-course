import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

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

  // temos aqui a injecao do nosso servico pelo angular
  // por baixo dos panos e criado uma variavel membro e por meio do this, ele recebe o servico injeto no construtor
  constructor(private passengerService: PassengerDashboardService) {
  }

  ngOnInit() {
    this.passengerService.getPassengers().subscribe((data: Passenger[]) => {
      this.passengers = data;
    });
  }

  handleRemove(event: Passenger) {
    this.passengerService.deletePassenger(event.id).subscribe((data: Passenger) => {
      console.log(data);

      this.passengers = this.passengers.filter(p => p.id !== event.id);
    });
  }

  handleEdit(event: Passenger) {
    this.passengerService.updatePassenger(event).subscribe((data: Passenger) => {
      console.log(data);

      this.passengers = this.passengers.map(passenger => {
        if (passenger.id === event.id) {

          // first arg: to make sure you are getting a copy with another reference
          // second arg: the previous object
          // third arg: the new object
          // note: the first and second will be merged.
          passenger = Object.assign({}, passenger, event);

        }

        return passenger;
      });

    });
  }

  getPassenger(id: number) {
    this.passengerService.getPassenger(id).subscribe((data: Passenger) => {
      console.log(data);
    });
  }

}
