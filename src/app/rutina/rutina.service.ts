import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Rutina } from './rutina';
import {RutinaDetail} from './rutina-detail';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const rutinas = '/rutinas';


@Injectable(
//{ providedIn: 'root'}
)
export class RutinaService {

  constructor( private http: HttpClient) { }
  
  getRutinas() : Observable<Rutina[]> {
        return this.http.get<Rutina[]>(API_URL + rutinas);
    }
    
  getRutinaDetail(rutinaId): Observable<RutinaDetail> {
        return this.http.get<RutinaDetail>(API_URL + rutinas + '/' + rutinaId);
    }
}
