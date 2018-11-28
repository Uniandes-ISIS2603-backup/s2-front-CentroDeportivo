import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Implemento } from './implemento';
import {ImplementoDetail} from './implemento-detail';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const implementos = '/implementos';

//const API_URL = "../../assets/";
//const implementos = 'zonasCuerpo.json';

/**
* Proveedor de servicios para todo lo relacionado con ejercicio
*/
@Injectable(
//  {providedIn: 'root'}
)
export class ImplementoService {headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    });
    /**
    * Constructor del implemento
    * @param http HttpClient - necesario para procesar pedidos
    */
  constructor(private http: HttpClient) { }
  
   /**
    * retorna el Observable ocon lista obtenida del api
    * @returns la lista de implementos
    */
  getImplementos() : Observable<Implemento[]>{
      return this.http.get<Implemento[]>(API_URL + implementos);
  }
  /**
    * retorna observable del objeto
    * @returns el implemento
    */
    getImplementoDetail(implementoId): Observable<ImplementoDetail> {
        return this.http.get<ImplementoDetail>(API_URL + implementos + '/' + implementoId);
    }
    /**
    * Crea un implemento
    * @param implemento el implemento que sera creado
    * @returns confirmacion de creacion
    */
      createImplemento(implemento): Observable<Implemento> {
        return this.http.post<Implemento>(API_URL + implementos, implemento);
    }
    updateImplemento(implemento): Observable<ImplementoDetail> {
        return this.http.put<ImplementoDetail>(API_URL + implementos + '/' + implemento.id, implemento);
    }
    deleteImplemento(implementoId): Observable<ImplementoDetail> {
        return this.http.delete<ImplementoDetail>(API_URL + implementos + '/' + implementoId);
    }
}
