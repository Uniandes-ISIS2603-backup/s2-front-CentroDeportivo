import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deportista } from './deportista';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const deportistas = 'deportistas.json';

@Injectable(
//  {providedIn: 'root'}
)
export class DeportistaService {

  constructor(private http: HttpClient) { }
  
  getDeportistas() : Observable<Deportista[]>{
      return this.http.get<Deportista[]>(API_URL + deportistas)
  }
}
