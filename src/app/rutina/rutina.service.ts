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
/**
    * Constructor de la rutina
    * @param http HttpClient - necesario para procesar pedidos
    */
  constructor( private http: HttpClient) { }
  /**
    * retorna el Observable ocon lista obtenida del api
    * @returns la lista de rutinas
    */
  getRutinas() : Observable<Rutina[]> {
        return this.http.get<Rutina[]>(API_URL + rutinas);
    }
     /**
    * retorna observable del objeto
    * @returns la rutina
    */
  getRutinaDetail(rutinaId): Observable<RutinaDetail> {
        return this.http.get<RutinaDetail>(API_URL + rutinas + '/' + rutinaId);
    }
     /**
    * Crea una rutina
    * @param rutina rutina que sera creada
    * @returns confirmacion de creacion de la rutina
    */
    createRutina(rutina): Observable<Rutina> {
        return this.http.post<Rutina>(API_URL + rutinas, rutina);
    }
}
