import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Objetivo } from './objetivo';
import { ObjetivoDetail } from './objetivo-detail';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const objetivos = '/objetivos';

@Injectable(
//    {providedIn: 'root'}
    )
export class ObjetivoService {

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
}
