import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Router} from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { AF} from '../servicios/af';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    data;
    name;
    foto;
    isLoggedIn;
    isLoggedGoogle;
    isLoggedFacebook;
    isLoggedTwitter;
    private _authState: FirebaseAuthState = null;
  constructor(private http: Http, public af: AngularFire, private router: Router, public afService: AF) {
    this.http.get('../../assets/data/data.json')
               .subscribe(res => this.data = res.json());

               // This asynchronously checks if our user is logged it and will automatically
    // redirect them to the Login page when the status changes.
    // This is just a small thing that Firebase does that makes it easy to use.
    this.afService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          this.isLoggedGoogle = false;
          this.isLoggedFacebook = false;
          this.isLoggedTwitter = false;
          this.router.navigate(['login']);
        }
        else {
          // Set the Display Name and Email so we can attribute messages to them
          if (auth.google) {
            this.afService.displayName = auth.google.displayName;
            this.afService.email = auth.google.email;
            this.foto = auth.google.photoURL;
            this.isLoggedGoogle = true;
          } else if (auth.facebook) {
            this.afService.displayName = auth.facebook.displayName;
            this.afService.email = auth.facebook.email;
            this.foto = auth.facebook.photoURL;
            this.isLoggedFacebook = true;
          } else if (auth.twitter) {
            this.afService.displayName = auth.twitter.displayName;
            this.afService.email = auth.twitter.email;
            this.foto = auth.twitter.photoURL;
            this.isLoggedTwitter = true;
          }
          else {
            this.afService.displayName = auth.auth.email;
            this.afService.email = auth.auth.email;
            this.isLoggedIn = true;
          }

        }
      }
    );
   }

  ngOnInit() {
  }

  logout() {
    this.af.auth.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('home');
 }

}
