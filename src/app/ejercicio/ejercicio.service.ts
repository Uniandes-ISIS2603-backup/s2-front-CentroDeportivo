
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ejercicio } from './ejercicio';
import {EjercicioDetail} from './ejercicio-detail';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const ejercicios = '/ejercicios';


/**
* The service provider for everything related to ejercicios
*/
@Injectable()
export class EjercicioService {
     headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    });
    /**
    * Constructor del ejercicio
    * @param http HttpClient - necesario para procesar pedidos
    */
    constructor( private http: HttpClient) { }
  /**
    * retorna el Observable ocon lista obtenida del api
    * @returns la lista de ejercicios
    */
  getEjercicios() : Observable<Ejercicio[]> {
        return this.http.get<Ejercicio[]>(API_URL + ejercicios);
    }
    /**
    * retorna observable del objeto
    * @returns el ejercicio
    */
  getEjercicioDetail(ejercicioId): Observable<EjercicioDetail> {
        return this.http.get<EjercicioDetail>(API_URL + ejercicios + '/' + ejercicioId);
    }
    /**
    * Crea un ejercicio
    * @param ejercicio el ejercicio que sera creado
    * @returns confirmacion de creacion
    */
  createEjercicio(ejercicio): Observable<Ejercicio> {
        return this.http.post<Ejercicio>(API_URL + ejercicios, ejercicio);
    }
    
}


