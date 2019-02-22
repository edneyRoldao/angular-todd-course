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
        
        <hr>
        {{ form.value | json }}
      </form>
    </div>    
  `
})
export class PassengerFormComponent {

  @Input()
  passengerForm: Passenger;

}
