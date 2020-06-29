import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-nasa-api',
  templateUrl: './nasa-api.component.html',
  styleUrls: ['./nasa-api.component.css']
})
export class NasaAPIComponent implements OnInit {
  var2: any;
  bandera1: boolean;
  fechaUsuario:any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  funcionAPI1() {
    this.bandera1=true;
    this.api.funcionAPI1({fecha: this.fechaUsuario}).subscribe((var2: any[]) => {
        this.var2 = var2;
        console.log(this.var2);
        console.log(this.fechaUsuario);

    });
  }

}
