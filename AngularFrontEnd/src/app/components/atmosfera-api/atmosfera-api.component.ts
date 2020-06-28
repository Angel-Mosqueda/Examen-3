import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-atmosfera-api',
  templateUrl: './atmosfera-api.component.html',
  styleUrls: ['./atmosfera-api.component.css']
})
export class AtmosferaAPIComponent implements OnInit {
  var1: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  funcionAPI2() {
    this.api.funcionAPI2().subscribe((var1: any[]) => {
        this.var1 = var1;
        console.log(this.var1);

    });
  }


}
