import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data;
constructor(private http: Http) {
  this.http.get('../../assets/data/data.json')
             .subscribe(res => this.data = res.json());
 }

  ngOnInit() {
  }

}
