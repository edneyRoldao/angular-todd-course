import {Component, EventEmitter, Input, Output} from '@angular/core';
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
        
        <div class="col-1">
          <button class="btn btn-danger" (click)="toggleEdit()">
            {{ editing ? 'Done' : 'Edit' }}
          </button>
        </div>
        
        <div class="col-3">
          <button class="btn btn-danger" (click)="onRemove()">
            Remove
          </button>
        </div>
        
      </div>
    </div>
  `
})
export class PassengerDetailComponent {

  editing = false;

  @Input()
  passengerDetail: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

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

}
