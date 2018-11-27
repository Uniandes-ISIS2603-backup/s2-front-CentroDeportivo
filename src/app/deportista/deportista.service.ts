import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deportista } from './deportista';
import {DeportistaDetail} from './deportista-detail';
import { Observable } from 'rxjs';
import {Objetivo} from '../objetivo/objetivo';
import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const deportistas = '/deportistas';

//const API_URL = "../../assets/";
//const deportistas = 'deportistas.json';
const objetivos = '/objetivos';
/**
* Proveedor de servicios para todo lo relacionado con ejercicio
*/
@Injectable(
//  {providedIn: 'root'}
)
export class DeportistaService {headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    });
    /**
    * Constructor del deportista
    * @param http HttpClient - necesario para procesar pedidos
    */
  constructor(private http: HttpClient) { }
  
   /**
    * retorna el Observable ocon lista obtenida del api
    * @returns la lista de deportistas
    */
  getDeportistas() : Observable<Deportista[]>{
      return this.http.get<Deportista[]>(API_URL + deportistas);
  }
  /**
    * retorna observable del objeto
    * @returns el deportista
    */
    getDeportistaDetail(deportistaId): Observable<DeportistaDetail> {
        return this.http.get<DeportistaDetail>(API_URL + deportistas + '/' + deportistaId);
    }
    /**
    * Crea un deportista
    * @param deportista el deportista que sera creado
    * @returns confirmacion de creacion
    */
      createDeportista(deportista): Observable<Deportista> {
        return this.http.post<Deportista>(API_URL + deportistas, deportista);
    }
    updateDeportista(deportista): Observable<DeportistaDetail> {
        return this.http.put<DeportistaDetail>(API_URL + deportistas + '/' + deportista.id, deportista);
    }
    deleteDeportista(deportistaId): Observable<DeportistaDetail> {
        return this.http.delete<DeportistaDetail>(API_URL + deportistas + '/' + deportistaId);
    }
    createObjetivo(deportistaId, objetivo): Observable<Objetivo> {
        return this.http.post<Objetivo>(API_URL + deportistas + '/' + deportistaId + objetivos, objetivo);
    }
}
