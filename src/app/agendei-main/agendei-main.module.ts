import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendeiMainComponent } from './agendei-main.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AgendeiMainRoutingModule } from './agendei-main-routing/agendei-main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AgendeiMainRoutingModule
  ],
  declarations: [
    AgendeiMainComponent,
    LoginPageComponent
  ],
  exports: [
    AgendeiMainComponent
  ]
})
export class AgendeiMainModule { }
