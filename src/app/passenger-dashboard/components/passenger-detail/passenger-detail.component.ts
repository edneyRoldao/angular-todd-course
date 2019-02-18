import {Component, Input} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  styleUrls: ['passenger-detail.component.css'],
  template: `
    <div class="container" style="margin-bottom: 10px">
      <div class="row">
        <div class="col-1">
          <span class="status"
                [ngStyle]="{ background: (passengerDetail.checkedIn ? '#2ecc71' : '#c0392b') }">
          </span>
        </div>
        
        <div class="col-4" *ngIf="editing">
          <input type="text" 
                 [value]="passengerDetail.fullName" 
                 (input)="onNameChange(name.value)" 
                 #name>
        </div>
        
        <div class="col-4" *ngIf="!editing">
          {{ passengerDetail.fullName }}
        </div>
        
        <div class="col-4">
          <button class="btn btn-danger" (click)="toggleEdit()">
            {{ editing ? 'Done' : 'Edit' }}
          </button>
        </div>
      </div>
    </div>
  `
})
export class PassengerDetailComponent {

  @Input()
  passengerDetail: Passenger;

  editing = false;

  onNameChange(value: string) {
    this.passengerDetail.fullName = value;
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

}
