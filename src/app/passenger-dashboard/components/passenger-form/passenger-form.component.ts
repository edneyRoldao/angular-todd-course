import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import {Baggage} from '../../models/baggage.interface';

@Component({
  selector: 'app-passenger-form',
  styleUrls: ['passenger-form.component.css'],
  template: `
    <div class="container">
      {{ passengerForm | json }}
      <hr>
      <form #form="ngForm" novalidate>
        
        <!-- name input -->
        <div class="form-group row">
          <label class="col-form-label" for="passengerName">Passenger Name</label>
          <div class="col-sm-5">
            <input type="text"
                   class="form-control"
                   id="passengerName"
                   name="fullname"
                   required
                   #fullname="ngModel"
                   [ngModel]="passengerForm?.fullName">

            {{ fullname.errors | json }}
          </div>
          
          <div class="alert alert-danger" *ngIf="fullname.errors?.required">
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
        
        <hr>
        {{ form.value | json }}
        
        <hr>
        {{ 'valid: ' + form.valid | json }}
        
        <hr>
        {{ 'invalid: ' + form.invalid | json }}
      </form>
    </div>    
  `
})
export class PassengerFormComponent {

  @Input()
  passengerForm: Passenger;

  baggage: Baggage[] = [
    {key: 'none', value: 'no baggage'},
    {key: 'hand-only', value: 'hand baggage'},
    {key: 'hold-only', value: 'hold baggage'},
    {key: 'hand-hold', value: 'hand and hold baggage'},
  ];

  toggleCheckIn(event: boolean) {
    if (event) {
      this.passengerForm.checkInDate = Date.now(); // time now as ms
    }
  }

}
