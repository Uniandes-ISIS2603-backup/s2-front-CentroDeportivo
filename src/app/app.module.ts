import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaquinaModule } from './maquina/maquina.module';
import { ImplementoModule } from './implemento/implemento.module';
import { DeportistaModule } from './deportista/deportista.module';
import { ObjetivoModule } from './objetivo/objetivo.module';
import { EspecialistaModule } from './especialista/especialista.module';
import {EjercicioModule} from './ejercicio/ejercicio.module';
import {ZonacuerpoModule} from './zonacuerpo/zonacuerpo.module';


import { RutinaModule } from './rutina/rutina.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaquinaModule,
    ImplementoModule,
    DeportistaModule,
    ObjetivoModule,
    EspecialistaModule,
    RutinaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
