import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Implemento } from './implemento';
import { Observable } from 'rxjs';
import {ImplementoDetail} from './implemento-detail';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const implementos = '/implementos';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class ImplementoService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor( private http: HttpClient) { }
  
    getImplementos() : Observable<Implemento[]> {
        return this.http.get<Implemento[]>(API_URL + implementos);
    }
    
    getImplementoDetail(implementoId): Observable<ImplementoDetail> {
        return this.http.get<ImplementoDetail>(API_URL + implementos + '/' + implementoId);
    }
}
