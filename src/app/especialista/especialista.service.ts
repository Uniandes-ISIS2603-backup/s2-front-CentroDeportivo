import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Especialista } from './especialista';

const API_URL = "../../assets/";
const especialistas = 'especialitsas.json';

@Injectable(
 //{providedIn: 'root'}
 )
export class EspecialistaService {

  constructor( private http: HttpClient) { }
  
   getEspecialistas() : Observable<Especialista[]> {
        return this.http.get<Especialista[]>(API_URL + especialistas);
    }
    
}
