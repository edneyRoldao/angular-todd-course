import {Component, Input} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';


@Component({
  selector: 'app-passenger-count',
  styleUrls: ['passenger-count.component.css'],
  template: `
    <div class="container">
      Total Passengers: {{ passengersList?.length || 0 }} <br>
      Total Passengers checked-in: {{ checkedInCount() }}
    </div> 
  `
})
export class PassengerCountComponent {

  @Input()
  passengersList: Passenger[];

  checkedInCount(): number {
    if (!this.passengersList) {
      return;
    }

    return this.passengersList.filter((p: Passenger) => p.checkedIn).length;
  }

}
