import { by } from 'protractor';
import { Component, ViewChild,  OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../router.animations';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { AF } from '../../servicios/af';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {
  error: any;

  constructor(public af: AngularFire, private router: Router, fb: FormBuilder, private afService: AF) {
  }


  //registers the user and logs them in
  register(event, name, email, password) {
    event.preventDefault();
    this.afService.registerUser(email, password).then((user) => {
      this.afService.saveUserInfoFromForm(user.uid, name, email).then(() => {
        this.router.navigate(['login']);
      })
        .catch((error) => {
          this.error = error;
        });
    })
      .catch((error) => {
        this.error = error;
        console.log(this.error);
      });
  }

  /*onSubmit(formData) {
      if (formData.valid) {
        console.log(formData.value);
        this.af.auth.createUser({
          email: formData.value.email,
          password: formData.value.password,
        }).then(
          (success) => {
          this.router.navigate(['/members']);
        }).catch(
          (err) => {
          this.error = err;
        });
      }
  }*/

  ngOnInit() {

  }


}
