import {Component, Input} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  styleUrls: ['passenger-detail.component.css'],
  template: `
    <div class="container">
      <ul>
        <li>
          <span class="status"
                [ngStyle]="{ background: (passengerDetail.checkedIn ? '#2ecc71' : '#c0392b') }">
          </span>
          
          {{ passengerDetail.fullName }}
          
        </li>
      </ul>
    </div>
  `
})
export class PassengerDetailComponent {

  @Input()
  passengerDetail: Passenger;

}
