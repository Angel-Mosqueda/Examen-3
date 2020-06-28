import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-atmosfera-api',
  templateUrl: './atmosfera-api.component.html',
  styleUrls: ['./atmosfera-api.component.css']
})
export class AtmosferaAPIComponent implements OnInit {

  constructor(/*private _api: ApiService*/) { }

  ngOnInit(): void {
  }

  /*ProbarAPI(evt){
    evt.preventDefault();
    this._api.EnviarAPI({

    }).subscribe(
      (succes) =>{},
      (error)=> {}
    )
  }*/

}
