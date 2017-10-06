import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth.service';
import { LoginComponent } from './contents/index.paginas';
import { MembersComponent } from './contents/index.paginas';
import { SignupComponent } from './contents/index.paginas';


// Componentes
import { HomeComponent } from './contents/index.paginas';
import { AboutComponent } from './contents/index.paginas';
import { ServicesComponent } from './contents/index.paginas';
import { ContactComponent } from './contents/index.paginas';


export const router: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});
