import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private _http: HttpClient) { }

  funcionAPI1(data:any) {
    console.log(data);
    return this._http.get('http://localhost:3000/api1');
  }
  
  funcionAPI2() {
    return this._http.get('http://localhost:3000/api2');
  }

  /*EnviarAPI(data: any){
    return this._http.post(`enviar_api`,data);
  }*/

}
