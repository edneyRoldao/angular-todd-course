import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'app-passenger-form',
  styleUrls: ['passenger-form.component.css'],
  template: `
    <div class="container">
      <hr>
      <form #form="ngForm" 
            novalidate 
            (ngSubmit)="handleSubmit(form.value, form.valid)">
        
        <!-- name input -->
        <div class="form-group row">
          <label class="col-form-label" for="passengerName">Passenger Name</label>
          <div class="col-sm-5">
            <input type="text"
                   class="form-control"
                   id="passengerName"
                   name="fullName"
                   required
                   #fullName="ngModel"
                   [ngModel]="passengerForm?.fullName">
          </div>
          
          <div class="alert alert-danger" *ngIf="fullName.errors?.required">
            The name is required
          </div>
          
        </div>

        <!-- working with checkboxes -->
        <div class="form-check" style="margin-top: 20px">
          <input class="form-check-input"
                 type="checkbox" 
                 name="checkedIn" 
                 [ngModel]="passengerForm?.checkedIn"
                 (ngModelChange)="toggleCheckIn($event)"
                 id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1"> Default checkbox </label>
        </div>
        
        <!-- checkInDate input -->
        <div *ngIf="form.value.checkedIn" class="form-group row" style="margin-top: 10px">
          <label class="col-form-label" for="checkInDate">Check-in date</label>
          <div class="col-sm-5">
            <input class="form-control"
                   id="checkInDate"
                   type="number"
                   name="checkInDate"
                   [ngModel]="passengerForm?.checkInDate">
          </div>
        </div>
        
        <hr>
        <div class="col-6">
          <select class="custom-select" 
                  name="baggage"
                  [ngModel]="passengerForm?.baggage">
            
            <option *ngFor="let bag of baggage"
                    [selected]="bag.key === passengerForm?.baggage"
                    [value]="bag.key">
              
              {{ bag.value }}
            </option>
          </select>
        </div>
        
        <div class="col-3" style="margin-top: 20px">
          <button type="submit" 
                  class="btn btn-dark" 
                  [disabled]="form.invalid">
            UPDATE
          </button>
        </div>
      </form>
    </div>    
  `
})
export class PassengerFormComponent {

  @Input()
  passengerForm: Passenger;

  @Output()
  passengerUpdated: EventEmitter<Passenger> = new EventEmitter();

  baggage: Baggage[] = [
    {key: 'none', value: 'no baggage'},
    {key: 'hand-only', value: 'hand baggage'},
    {key: 'hold-only', value: 'hold baggage'},
    {key: 'hand-hold', value: 'hand and hold baggage'},
  ];

  toggleCheckIn(event: boolean) {
    if (event) {
      this.passengerForm.checkInDate = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, valid: boolean) {
    if (valid) {
      this.passengerUpdated.emit(passenger);
    }
  }

}
