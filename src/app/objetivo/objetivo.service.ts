import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Objetivo } from './objetivo';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const objetivos = 'objetivos.json';

@Injectable(
//    {providedIn: 'root'}
    )
export class ObjetivoService {

  constructor(private http: HttpClient) { }
  
  getObjetivos():Observable<Objetivo[]>
  {
      return this.http.get<Objetivo[]>(API_URL+objetivos);
  }
}
