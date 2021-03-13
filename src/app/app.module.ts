import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgendeiMainComponent } from './agendei-main/agendei-main.component';
import { AgendeiMainModule } from './agendei-main/agendei-main.module';

@NgModule({
  declarations: [	
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AgendeiMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
