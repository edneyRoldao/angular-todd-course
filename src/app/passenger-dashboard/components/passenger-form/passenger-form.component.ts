import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-form',
  styleUrls: ['passenger-form.component.css'],
  template: `
  
    <form>
      Form component is working
      <hr>
      {{ passengerForm | json }}
    </form>
    
  `
})
export class PassengerFormComponent {

  @Input()
  passengerForm: Passenger;

}
