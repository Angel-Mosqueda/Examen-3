import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  funcionAPI1(fecha: any) {
    var link: string = "http://localhost:3000/api1/" + fecha;
    return this._http.get(link);
  }


  funcionAPI2() {
    return this._http.get('http://localhost:3000/api2');
  }

  /*EnviarAPI(data: any){
    return this._http.post(`enviar_api`,data);
  }*/

}
