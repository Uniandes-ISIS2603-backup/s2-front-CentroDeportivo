import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Rutina } from './rutina';

const API_URL = "../../assets/";
const rutinas = 'rutinas.json';

@Injectable(
 //{providedIn: 'root'}
 )
export class RutinaService {

  constructor( private http: HttpClient) { }
  
   getRutinas() : Observable<Rutina[]> {
        return this.http.get<Rutina[]>(API_URL + rutinas);
    }
    
}
