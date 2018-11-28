import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Especialista } from './especialista';
import {EspecialistaDetail} from './especialista-detail';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const especialistas = '/especialistas';


@Injectable(
//{ providedIn: 'root'}
)
export class EspecialistaService {
/**
    * Constructor del especialista
    * @param http HttpClient - necesario para procesar pedidos
    */
  constructor( private http: HttpClient) { }
  /**
    * retorna el Observable ocon lista obtenida del api
    * @returns la lista de especialistas
    */
  getEspecialistas() : Observable<Especialista[]> {
        return this.http.get<Especialista[]>(API_URL + especialistas);
    }
    /**
    * retorna observable del objeto
    * @returns el especialista
    */
  getEspecialistaDetail(especialistaId): Observable<EspecialistaDetail> {
        return this.http.get<EspecialistaDetail>(API_URL + especialistas + '/' + especialistaId);
    }
     /**
    * Crea un especialista
    * @param especialista el especialista que sera creado
    * @returns confirmacion de creacion
    */
    createEspecialista(especialista): Observable<Especialista> {
        return this.http.post<Especialista>(API_URL + especialistas, especialista);
    }
    /**
    * Edita un especialista
    * @param especialista el especialista que sera modificado
    * @returns confirmacion de modificacion
    */
    updateEspecialista(especialista): Observable<EspecialistaDetail> {
        return this.http.put<EspecialistaDetail>(API_URL + especialistas + '/' + especialista.id, especialista);
    }
   /**
    * Elimina un especialista
    * @param especialista que sera eliminado
    * @returns confirmacion de eliminacion
    */
  deleteEspecialista(especialistaId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + especialistas + '/' + especialistaId);
    }
}
