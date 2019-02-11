export interface Passenger {

  id: number;
  fullName: string;
  checkedIn: boolean;
  checkInDate: number | null;
  // checkInDate?: number; quando um atributo é opcinal para o objeto

}
