import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-form',
  styleUrls: ['passenger-form.component.css'],
  template: `

    <!-- #form="ngForm": os dados do formulario serao guardados aqui    -->
    <!--     novalidate: e utilizar para o formulario nao ser validade  -->
    
    <!-- variacoes ngModel:
          1 -  ngModel                            -> dentro do templateRef form sera adicionada uma prop com o mesmo nome definido em name
          2 - [ngMolde]="passengerForm.fullname"  -> faz binding com o objeto passengerForm via oneWayDataFlow mais tudo do passo anterior
     -->
    
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
                   [ngModel]="passengerForm?.fullName"> <!-- usar safeNavigation para evitar possiveis erros, ja que tudo é assincrono -->
          </div>
        </div>

        <!-- primeiro radio -->
        <div class="form-check">
          <input class="form-check-input"
                 type="radio"
                 name="checkedIn"
                 id="rd1"
                 [value]="true"
                 [ngModel]="passengerForm?.checkedIn"
                 (ngModelChange)="toggleCheckIn($event)">
          <label class="form-check-label" for="rd1"> YES </label>
        </div>

        <!-- segundo radio -->
        <div class="form-check">
          <input class="form-check-input"
                 type="radio"
                 name="checkedIn"
                 id="rd2"
                 [value]="false"
                 [ngModel]="passengerForm?.checkedIn"
                 (ngModelChange)="toggleCheckIn($event)">
          <label class="form-check-label" for="rd2"> NO </label>
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
        
        <!-- working with checkboxes -->
        <div class="form-check" style="margin-top: 20px">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1"> Default checkbox </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
          <label class="form-check-label" for="defaultCheck2"> Disabled checkbox </label>
        </div>
        
        <hr>
        {{ form.value | json }}
      </form>
    </div>    
  `
})
export class PassengerFormComponent {

  @Input()
  passengerForm: Passenger;

  toggleCheckIn(event: boolean) {
    if (event) {
      console.log('asdfsdfasdfasdfasdfasdfasdfasd');
      this.passengerForm.checkInDate = Date.now(); // time now as ms
    }
  }

}
