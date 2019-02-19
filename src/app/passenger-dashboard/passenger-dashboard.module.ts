import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Containers
import { PassengerDashboardComponent } from './containers/pasenger-dashboard/passenger-dashboard.component';

// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

// services
import { PassengerDashboardService } from './services/passenger-dashboard.service';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule { }
