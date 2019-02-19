import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Passenger } from '../models/passenger.interface';

const API_URL_BASE = 'http://localhost:3000/';

@Injectable()
export class PassengerDashboardService {

  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    const URL = API_URL_BASE + 'passengers';
    return this.http.get<Passenger[]>(URL);
  }

}
