import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerDashboardComponent } from './containers/pasenger-dashboard/passenger-dashboard.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule { }
