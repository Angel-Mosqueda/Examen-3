import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private _http: HttpClient) { }

  /*EnviarAPI(data: any){
    return this._http.post(`enviar_api`,data);
  }*/

}
