import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaquinaModule } from './maquina/maquina.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaquinaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
