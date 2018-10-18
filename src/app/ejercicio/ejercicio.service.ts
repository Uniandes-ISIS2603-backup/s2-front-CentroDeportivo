
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ejercicio } from './ejercicio';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const ejercicios = 'ejercicios.json';

/**
* The service provider for everything related to ejercicios
*/
@Injectable()
export class EjercicioService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getEjercicios() : Observable<Ejercicio[]> {
        return this.http.get<Ejercicio[]>(API_URL + ejercicios);
    }
    
}


