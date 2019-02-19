import {Passenger} from '../models/passenger.interface';

export class PassengerDashboardService {

  constructor() {}

  getPassengers(): Passenger[] {
    return [
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
  }

}
