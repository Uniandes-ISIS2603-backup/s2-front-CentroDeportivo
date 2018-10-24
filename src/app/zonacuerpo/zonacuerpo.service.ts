
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Zonacuerpo } from './zonacuerpo';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
//const API_URL = "../../assets/";
//const zonascuerpo = 'zonacuerpos.json';

const API_URL = environment.apiURL;
const zonascuerpo = '/zonasCuerpo';
/**
* The service provider for everything related to zonascuerpo
*/
@Injectable()
export class ZonacuerpoService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getZonacuerpos() : Observable<Zonacuerpo[]> {
        return this.http.get<Zonacuerpo[]>(API_URL + zonascuerpo);
    }
    
}


