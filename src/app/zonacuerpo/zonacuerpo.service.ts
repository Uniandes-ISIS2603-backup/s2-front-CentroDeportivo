import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Zonacuerpo } from './zonacuerpo';
import {ZonacuerpoDetail} from './zonacuerpo-detail';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const zonascuerpo = '/zonasCuerpo';

//const API_URL = "../../assets/";
//const zonascuerpo = 'zonasCuerpo.json';

/**
* Proveedor de servicios para todo lo relacionado con ejercicio
*/
@Injectable(
//  {providedIn: 'root'}
)
export class ZonacuerpoService {headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    });
    /**
    * Constructor del zonacuerpo
    * @param http HttpClient - necesario para procesar pedidos
    */
  constructor(private http: HttpClient) { }
  
   /**
    * retorna el Observable ocon lista obtenida del api
    * @returns la lista de zonascuerpo
    */
  getZonacuerpos() : Observable<Zonacuerpo[]>{
      return this.http.get<Zonacuerpo[]>(API_URL + zonascuerpo);
  }
  /**
    * retorna observable del objeto
    * @returns el zonacuerpo
    */
    getZonacuerpoDetail(zonacuerpoId): Observable<ZonacuerpoDetail> {
        return this.http.get<ZonacuerpoDetail>(API_URL + zonascuerpo + '/' + zonacuerpoId);
    }
    /**
    * Crea un zonacuerpo
    * @param zonacuerpo el zonacuerpo que sera creado
    * @returns confirmacion de creacion
    */
      createZonacuerpo(zonacuerpo): Observable<Zonacuerpo> {
        return this.http.post<Zonacuerpo>(API_URL + zonascuerpo, zonacuerpo);
    }
    updateZonacuerpo(zonacuerpo): Observable<ZonacuerpoDetail> {
        return this.http.put<ZonacuerpoDetail>(API_URL + zonascuerpo + '/' + zonacuerpo.id, zonacuerpo);
    }
    deleteZonacuerpo(zonacuerpoId): Observable<ZonacuerpoDetail> {
        return this.http.delete<ZonacuerpoDetail>(API_URL + zonascuerpo + '/' + zonacuerpoId);
    }
}
