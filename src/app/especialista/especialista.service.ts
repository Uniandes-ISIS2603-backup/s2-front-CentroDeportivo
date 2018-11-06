import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Especialista } from './especialista';
import {EspecialistaDetail} from './especialista-detail';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const especialistas = '/especialistas';


@Injectable(
//{ providedIn: 'root'}
)
export class EspecialistaService {

  constructor( private http: HttpClient) { }
  
  getEspecialistas() : Observable<Especialista[]> {
        return this.http.get<Especialista[]>(API_URL + especialistas);
    }
    
  getEspecialistaDetail(especialistaId): Observable<EspecialistaDetail> {
        return this.http.get<EspecialistaDetail>(API_URL + especialistas + '/' + especialistaId);
    }
     /**
    * Creates an especialista
    * @param especialista The especialista which will be created
    * @returns The confirmation of the especialista's creation
    */
    createEspecialista(especialista): Observable<EspecialistaDetail> {
        return this.http.post<EspecialistaDetail>(API_URL + especialistas, especialista);
    }
}
