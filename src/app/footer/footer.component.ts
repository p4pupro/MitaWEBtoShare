import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();
  data;
constructor(private http: Http) {
  this.http.get('../../assets/data/data.json')
             .subscribe(res => this.data = res.json());
 }

  ngOnInit() {
  }

}
