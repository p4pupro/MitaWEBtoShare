import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  data;
constructor(private http: Http) {
  this.http.get('../../assets/data/data.json')
             .subscribe(res => this.data = res.json());
 }

  ngOnInit() {
  }


}
