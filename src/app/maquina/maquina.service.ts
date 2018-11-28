import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Maquina } from './maquina';
import {MaquinaDetail} from './maquina-detail';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const maquinas = '/maquinas';


@Injectable(
//{ providedIn: 'root'}
)
export class MaquinaService {

  constructor( private http: HttpClient) { }
  
  getMaquinas() : Observable<Maquina[]> {
        return this.http.get<Maquina[]>(API_URL + maquinas);
    }
    
  getMaquinaDetail(maquinaId): Observable<MaquinaDetail> {
        return this.http.get<MaquinaDetail>(API_URL + maquinas + '/' + maquinaId);
    }
    
  createMaquina(maquina): Observable<Maquina> {
        return this.http.post<Maquina>(API_URL + maquinas, maquina);
    }
    
  updateMaquina(maquina): Observable<MaquinaDetail> {
        return this.http.put<MaquinaDetail>(API_URL + maquinas + '/' + maquina.id, maquina);
    }
   
  deleteAuthor(maquinaId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + maquinas + '/' + maquinaId);
    }
}
