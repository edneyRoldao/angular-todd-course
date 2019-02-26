import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { ActivatedRoute } from '@angular/router';

import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

@Component({
  selector: 'app-passenger-viewer',
  styleUrls: ['passenger-viewer.component.css'],
  template: `
    
    <div>
      <div class="container">
        
        <app-passenger-form [passengerForm]="passenger" 
                            (passengerUpdated)="onUpdatePassenger($event)">
        </app-passenger-form>
        
      </div>
    </div>
    
  `
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(private passengerService: PassengerDashboardService, private route: ActivatedRoute) {}

  ngOnInit() {
    // obtendo o id da rota
    const id = this.route.snapshot.paramMap.get('id');
    this.passengerService.getPassenger(id).subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
    this.passenger = Object.assign({}, this.passenger, event);
    this.passengerService.updatePassenger(this.passenger).subscribe((data: Passenger) => console.log(data));
  }

}
