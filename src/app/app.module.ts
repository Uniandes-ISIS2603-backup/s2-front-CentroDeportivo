import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { ModalDialogModule } from 'ngx-modal-dialog';

import { MaquinaModule } from './maquina/maquina.module';
import { ImplementoModule } from './implemento/implemento.module';
import { DeportistaModule } from './deportista/deportista.module';
import { ObjetivoModule } from './objetivo/objetivo.module';
import { EspecialistaModule } from './especialista/especialista.module';
import { EjercicioModule } from './ejercicio/ejercicio.module';
import { ZonacuerpoModule } from './zonacuerpo/zonacuerpo.module';
import { RutinaModule } from './rutina/rutina.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaquinaModule,
    ImplementoModule,
    DeportistaModule,
    ObjetivoModule,
    EspecialistaModule,
    ModalDialogModule.forRoot(),
    RutinaModule,
    EjercicioModule,
    ZonacuerpoModule,
    HomeModule,
    ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
