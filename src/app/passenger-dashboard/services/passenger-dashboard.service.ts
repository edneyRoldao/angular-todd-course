import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  // obtendo Passenger pelo id. (apenas para o teste do select box) branch 28-...
  getPassenger(passengerId: any): Observable<Passenger> {
    return this.http.get<Passenger>(`${API_URL_BASE}/${passengerId}`);
  }

  // Adicionando headers ao request
  updatePassenger(passenger: Passenger): Observable<Passenger> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Auth': 'abc123'
    });

    const params = new HttpParams()
      .set('operacao', 'passenger-update')
      .set('mais_queryString', 'test teste');

    const httpOptions = {
      headers, params
    };

    return this.http.put<Passenger>(`${API_URL_BASE}/${passenger.id}`, passenger, httpOptions);
  }

  deletePassenger(passengerId: number): Observable<Passenger> {
    return this.http.delete<Passenger>(`${API_URL_BASE}/${passengerId}`);
  }

}
