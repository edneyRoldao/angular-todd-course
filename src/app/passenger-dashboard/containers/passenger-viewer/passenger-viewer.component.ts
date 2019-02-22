import {Component, OnInit} from '@angular/core';
import {PassengerDashboardService} from '../../services/passenger-dashboard.service';
import {Passenger} from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-viewer',
  styleUrls: ['passenger-viewer.component.css'],
  template: `
    
    <div>
      <div class="container">
        
        <app-passenger-form [passengerForm]="passenger">
        </app-passenger-form>
        
      </div>
    </div>
    
  `
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit() {
    this.passengerService.getPassenger(1).subscribe((data: Passenger) => {
      this.passenger = data;
    });
  }

}
