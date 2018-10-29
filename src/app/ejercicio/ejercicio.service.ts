
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ejercicio } from './ejercicio';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const ejercicios = '/ejercicios';


//const API_URL = "../../assets/";
//const ejercicios = 'ejercicios.json';

/**
* The service provider for everything related to ejercicios
*/
@Injectable()
export class EjercicioService {
     headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    });
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getEjercicios() : Observable<Ejercicio[]> {       
        return this.http.get<Ejercicio[]>(API_URL + ejercicios);        
    }
    
    getEjercicioDetail(ejercicioId): Observable<Ejercicio> {
        return this.http.get<Ejercicio>(API_URL + ejercicios + '/' + ejercicioId);
    }
    
}


