import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import { Passenger } from '../models/passenger.interface';
import {catchError, retry} from 'rxjs/internal/operators';

const API_URL_BASE = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {

  constructor(private http: HttpClient) {}

  // listando passengers
  getPassengers(): Observable<Passenger[]> {
    const urlQueNaoExiste = API_URL_BASE + '/naoExiste';
    return this.http.get<Passenger[]>(urlQueNaoExiste);
  }

  // testando errorHandling
  getPassengers2(): Observable<Passenger[]> {
    const urlQueNaoExiste = API_URL_BASE + '/naoExiste';
    return this.http.get<Passenger[]>(urlQueNaoExiste)
      .pipe(
        // podemos definir numero de tentativas antes do erro ser lancado com retry
        retry(2),
        catchError(this.errorHandling)
      );;
  }

  // obtendo Passenger pelo id.
  getPassenger(passengerId: number): Observable<Passenger> {
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

  private errorHandling(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // a client-side error occurred
      console.log('An error from client-side occurred: ', error.error.message);

    } else {
      console.log(`An error from service backend occurred and the status code was is ${error.status}, and 
      the body was: ${error.error}`);

    }

    return throwError('something bad happened, try again later');
  }

}
