import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Objetivo } from './objetivo';
import { ObjetivoDetail } from './objetivo-detail';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const objetivos = '/objetivos';

@Injectable(
//    {providedIn: 'root'}
    )
export class ObjetivoService { headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    });

  constructor(private http: HttpClient) { }
  
  getObjetivos():Observable<Objetivo[]>
  {
      return this.http.get<Objetivo[]>(API_URL+objetivos);
  }
  getObjetivoDetail(objetivoId): Observable<ObjetivoDetail> {
        return this.http.get<ObjetivoDetail>(API_URL + objetivos + '/' + objetivoId);
        
    }
      createObjetivo(objetivo): Observable<Objetivo> {
        return this.http.post<Objetivo>(API_URL + objetivos, objetivo);
    }
    updateObjetivo(objetivo): Observable<ObjetivoDetail> {
        return this.http.put<ObjetivoDetail>(API_URL + objetivos + '/' + objetivo.id, objetivo);
    }
    deleteObjetivo(objetivoId): Observable<ObjetivoDetail> {
        return this.http.delete<ObjetivoDetail>(API_URL + objetivos + '/' + objetivoId);
    }
}
