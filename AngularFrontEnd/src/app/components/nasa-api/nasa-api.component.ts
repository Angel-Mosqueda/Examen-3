import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-nasa-api',
  templateUrl: './nasa-api.component.html',
  styleUrls: ['./nasa-api.component.css']
})
export class NasaAPIComponent implements OnInit {

  constructor(/*private _api: ApiService*/) { }

  ngOnInit(): void {
  }

  /*ProbarAPI(evt){
    evt.preventDefault();
    this._api.EnviarAPI({

    }).subscribe(
      (succes) =>{},
      (error) => {}
    );
  }*/

}
