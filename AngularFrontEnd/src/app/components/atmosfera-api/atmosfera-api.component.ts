import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-atmosfera-api',
  templateUrl: './atmosfera-api.component.html',
  styleUrls: ['./atmosfera-api.component.css']
})
export class AtmosferaAPIComponent implements OnInit {
  var1: any;
  bandera: boolean = false;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  funcionAPI2() {
    this.bandera = true;
    this.api.funcionAPI2().subscribe((var1: any[]) => {
        this.var1 = var1;
        console.log(this.var1);
        console.log(this.var1.results[0].name);

    });
  }


}
