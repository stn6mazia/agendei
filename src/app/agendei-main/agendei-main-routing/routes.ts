import {Routes} from '@angular/router';
import { LoginPageComponent } from '../pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];
