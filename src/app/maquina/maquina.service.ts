import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Maquina } from './maquina';

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
}
