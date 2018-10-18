import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaquinaModule } from './maquina/maquina.module';
import { ImplementoModule } from './implemento/implemento.module';
import { DeportistaModule } from './deportista/deportista.module';
import { ObjetivoModule } from './objetivo/objetivo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaquinaModule,
    ImplementoModule,
    DeportistaModule,
    ObjetivoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
