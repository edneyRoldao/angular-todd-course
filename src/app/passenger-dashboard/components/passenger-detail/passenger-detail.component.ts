import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
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
        
        <div class="col-3" *ngIf="!editing">
          {{ passengerDetail.fullName }}
        </div>
        
        <div class="col-1">
          <button class="btn btn-danger" (click)="toggleEdit()">
            {{ editing ? 'Done' : 'Edit' }}
          </button>
        </div>
        
        <div class="col-2">
          <button class="btn btn-danger" (click)="onRemove()">
            Remove
          </button>
        </div>
        
        <div class="col-2">
          <button class="btn btn-danger" (click)="goToPassenger()">
            View
          </button>
        </div>
        
      </div>
    </div>
  `
})
export class PassengerDetailComponent implements OnChanges {

  editing = false;

  @Input()
  passengerDetail: Passenger;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter();

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter();

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter();

  onNameChange(value: string) {
    this.passengerDetail.fullName = value;
  }

  onRemove() {
    this.remove.emit( this.passengerDetail );
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit( this.passengerDetail );
    }

    this.editing = !this.editing;
  }

  goToPassenger() {
    this.view.emit( this.passengerDetail );
  }

  ngOnChanges(changes) {
    if (changes.passengerDetail) {
      this.passengerDetail = Object.assign({}, changes.passengerDetail.currentValue);
    }
  }

}
