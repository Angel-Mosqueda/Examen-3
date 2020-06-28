import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-nasa-api',
  templateUrl: './nasa-api.component.html',
  styleUrls: ['./nasa-api.component.css']
})
export class NasaAPIComponent implements OnInit {
  var1: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  funcionAPI1() {
    this.api.funcionAPI1().subscribe((var1: any[]) => {
        this.var1 = var1;
        console.log(this.var1);

    });
  }

}
