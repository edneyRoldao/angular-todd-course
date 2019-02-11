
import { Component } from '@angular/core';
import {Passenger} from './passenger.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container" style="margin-top: 10px; margin-bottom: 30px">
      <div class="jumbotron">

        <h3 style="text-align: center"> Safe navigation operator </h3>
        
      </div>
    </div>
    
    <div class="container">
      <h5>Airline Passengers</h5>

      <ul>
        <li *ngFor="let passenger of passengers">
          
          <div>
            {{ passenger.fullName }}
          </div>
          
          <div>
            
            usando safe navigation <br>
            Children: {{ passenger.children?.length || 0}}
            
            <!-- sem safe navigation operator, recebemos um erro no console: cannot read property length of null -->
            <!--Children: {{ passenger.children.length }}-->
          </div>
          
        </li>
      </ul>
      
      <hr>
      

    </div>
  `
})
export class AppComponent {

  passengers: Passenger[] = [
    {
      id: 1,
      fullName: 'edney',
      checkedIn: true,
      checkInDate: 1623514352345,
      children: [
        {name: 'marjorie', age: 3},
        {name: 'nadine', age: 16}
      ]
    },
    {
      id: 2,
      fullName: 'giselle',
      checkedIn: false,
      checkInDate: null,
      children: [
        {name: 'marjorie', age: 3},
        {name: 'nadine', age: 16}
      ]
    },
    {
      id: 3,
      fullName: 'marjorie',
      checkedIn: true,
      checkInDate: 1623514352345,
      children: null
    },
    {
      id: 4,
      fullName: 'nadine',
      checkedIn: false,
      checkInDate: null,
      children: null
    },
    {
      id: 5,
      fullName: 'draco',
      checkedIn: false,
      checkInDate: null,
      children: null
    }
  ];

  constructor() {
  }


}

