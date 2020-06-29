import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-nasa-api',
  templateUrl: './nasa-api.component.html',
  styleUrls: ['./nasa-api.component.css']
})
export class NasaAPIComponent implements OnInit {
  d = new Date();
  dia: number = this.d.getDate();
  mes: number = this.d.getMonth() + 1;
  anio: number = this.d.getFullYear();
  year1: number = 0;
  month1: number = 0;
  day1: number = 0;
  i: number = 0;
  day: string = "";
  month: string = "";
  year: string = "";
  var2: any;
  bandera1: boolean;
  bandera2: boolean ;
  fechaUsuario: string;
  fecha: Date;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
     if ((new Date().getTime() - start) > milliseconds) {
      break;
     }
    }
   }

  convertStringToNumber(input: string) {
    var numeric = Number(input);
    console.log(numeric);
    return numeric;
  }

  conversion(){
    for (this.i = 0; this.i < 4; this.i++) {
      this.year += this.fechaUsuario[this.i];
    }
    for (this.i = 5; this.i < 7; this.i++) {
      this.month += this.fechaUsuario[this.i];
    }
    for (this.i = 8; this.i < 10; this.i++) {
      this.day += this.fechaUsuario[this.i];
    }
    console.log("fecha ingresada " + this.year, this.month, this.day);
    this.day1=this.convertStringToNumber(this.day);
    this.month1=this.convertStringToNumber(this.month);
    this.year1=this.convertStringToNumber(this.year);
  }

  funcionAPI1() {
    this.conversion();

    if (this.year1 > this.anio || (this.month1 > this.mes && this.year1 >= this.anio) || (this.day1 > this.dia && this.month1 >= this.mes && this.year1 >= this.anio)) {
      this.bandera2 = true;
      //this.sleep(2000);
      //this.bandera2 = false;
      this.year = "";
      this.month = "";
      this.day = "";
      this.year1 = 0;
      this.month1 = 0;
      this.day1 = 0;
    } else {
      this.bandera2 = false;
      this.bandera1 = true;
      this.api.funcionAPI1(this.fechaUsuario).subscribe((var2: any[]) => {
        this.var2 = var2;
        console.log(this.var2);
      });
      this.year = "";
      this.month = "";
      this.day = "";
      this.year1 = 0;
      this.month1 = 0;
      this.day1 = 0;
    }
    //this.bandera2 = false;

  }

}
