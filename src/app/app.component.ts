
import { Component } from '@angular/core';
import {log} from 'util';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container" style="margin-top: 10px">
      <div class="jumbotron">

        <h1>ng-if and ng-template</h1>
        
        <input class="form-control" type="text" (input)="changeHandler($event.target.value)">
        <hr>
        
        <!-- exemplo com sugar syntax -->
        <div *ngIf="name.length">
          searching for... {{ name }}
        </div>
        
        <!-- forma mais verbosa do ngIf (em alguns casos o ngIf funcionará melhor assim -->
        <ng-template [ngIf]="name.length">
          <div>
            searching for... {{ name }}
          </div>
        </ng-template>
        
      </div>
    </div>
  `
})
export class AppComponent {
  name: string;

  constructor() {
  }

  changeHandler(valor: string) {
    this.name = valor;
  }

}

