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

  constructor(private passengerService: PassengerDashboardService) {
  }

  ngOnInit() {
    this.passengerService.getPassengers().subscribe(

        // when success
      (data: Passenger[]) => this.passengers = data,

      // when error (olhar no console do browser)
      (error) => console.log('LOG DO ERRO: ', error)

    );

    this.passengerService.getPassengers2().subscribe(

        // when success
      (data: Passenger[]) => this.passengers = data,

      // when error (olhar no console do browser)
      (error) => console.log('LOG DO ERRO - ErrorHandling: ', error)

    );

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
