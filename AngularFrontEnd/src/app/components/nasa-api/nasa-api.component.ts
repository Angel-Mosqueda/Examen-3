import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-nasa-api',
  templateUrl: './nasa-api.component.html',
  styleUrls: ['./nasa-api.component.css']
})
export class NasaAPIComponent implements OnInit {
  var2: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  funcionAPI1() {
    this.api.funcionAPI1().subscribe((var2: any[]) => {
        this.var2 = var2;
        console.log(this.var2);

    });
  }

}
