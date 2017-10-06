import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../router.animations';
import { AF} from '../../servicios/af';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
  isLoggedIn;
  error: any;
  constructor(public af: AngularFire, private router: Router, public afService: AF) {

    // This asynchronously checks if our user is logged it and will automatically
    // redirect them to the Login page when the status changes.
    // This is just a small thing that Firebase does that makes it easy to use.
    this.afService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Not Logged in.");
          this.isLoggedIn = false;
          this.router.navigate(['login']);
        }
        else {
          console.log("Successfully Logged in.");
          // Set the Display Name and Email so we can attribute messages to them
          if (auth.google) {
            this.afService.displayName = auth.google.displayName;
            this.afService.email = auth.google.email;
          } else if (auth.facebook) {
            this.afService.displayName = auth.facebook.displayName;
            this.afService.email = auth.facebook.email;
          } else if (auth.twitter) {
            this.afService.displayName = auth.twitter.displayName;
            this.afService.email = auth.twitter.email;
          }
          else {
            this.afService.displayName = auth.auth.email;
            this.afService.email = auth.auth.email;
          }
          this.isLoggedIn = true;
          this.router.navigate(['members']);
        }
      }
    );

  }


  loginWithEmail(event, email, password) {
    event.preventDefault();
    this.afService.loginWithEmail(email, password).then(() => {
      this.router.navigate(['members']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }


  loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['members']);
      }).catch(
        (err) => {
        this.error = err;
      });
  }

  loginTw() {
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['members']);
      }).catch(
        (err) => {
        this.error = err;
      });
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['members']);
      }).catch(
        (err) => {
        this.error = err;
      });
  }


 /* onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['home']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      });
    }
  }*/


  ngOnInit() {
  }

}
