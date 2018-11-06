import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deportista } from './deportista';
import {DeportistaDetail} from './deportista-detail';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const deportistas = '/deportistas';

//const API_URL = "../../assets/";
//const deportistas = 'deportistas.json';

@Injectable(
//  {providedIn: 'root'}
)
export class DeportistaService {headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    });

  constructor(private http: HttpClient) { }
  
  getDeportistas() : Observable<Deportista[]>{
      return this.http.get<Deportista[]>(API_URL + deportistas);
  }
    getDeportistaDetail(deportistaId): Observable<DeportistaDetail> {
        return this.http.get<DeportistaDetail>(API_URL + deportistas + '/' + deportistaId);
    }
      createDeportista(deportista): Observable<Deportista> {
        return this.http.post<Deportista>(API_URL + deportistas, deportista);
    }
}
