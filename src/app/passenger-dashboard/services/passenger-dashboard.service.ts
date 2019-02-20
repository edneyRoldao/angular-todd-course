import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Passenger } from '../models/passenger.interface';

const API_URL_BASE = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {

  constructor(private http: HttpClient) {}

  // listando passengers
  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(API_URL_BASE);
  }

  // obtendo Passenger pelo id.
  getPassenger(passengerId: number): Observable<Passenger> {
    return this.http.get<Passenger>(`${API_URL_BASE}/${passengerId}`);
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(`${API_URL_BASE}/${passenger.id}`, passenger);
  }

  deletePassenger(passengerId: number): Observable<Passenger> {
    return this.http.delete<Passenger>(`${API_URL_BASE}/${passengerId}`);
  }

}
