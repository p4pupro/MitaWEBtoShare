import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './contents/login/login.component';
import { SignupComponent } from './contents/signup/signup.component';
import { MembersComponent } from './contents/members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './contents/about/about.component';
import { ServicesComponent } from './contents/services/services.component';
import { HomeComponent } from './contents/home/home.component';
import { ContactComponent } from './contents/contact/contact.component';
import { Infoequipo } from './servicios/infoequipo.service';
import { ContentsComponent } from './contents/contents.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AF } from './servicios/af';
import { PrintComponent } from './contents/print/print.component';
//import { PdfmakeService } from './servicios/pdfmake.service';
import { PdfmakeModule } from 'ng-pdf-make';



// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyD0le8PhrjlK1mG_ojAxXriZ88ATHAeMuM',
  authDomain: 'mitaweb-ef054.firebaseapp.com',
  databaseURL: 'https://mitaweb-ef054.firebaseio.com',
  projectId: 'mitaweb-ef054',
  storageBucket: 'mitaweb-ef054.appspot.com',
  messagingSenderId: '356854729829'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MembersComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    HomeComponent,
    ContactComponent,
    ContentsComponent,
    PrintComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes,
    ReactiveFormsModule,
    PdfmakeModule
  ],
  providers: [AuthGuard, Infoequipo, AF, /*PdfmakeService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
