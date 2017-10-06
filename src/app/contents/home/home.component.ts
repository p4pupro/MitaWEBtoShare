import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data;
constructor(public af: AngularFire, private http: Http, private router: Router) {
  this.http.get('../../assets/data/data.json')
             .subscribe(res => this.data = res.json());
 }

  ngOnInit() {
  }


  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('home');
 }
}
