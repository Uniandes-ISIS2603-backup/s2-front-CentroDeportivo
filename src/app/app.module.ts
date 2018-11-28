import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaquinaModule } from './maquina/maquina.module';
import { ImplementoModule } from './implemento/implemento.module';
import { DeportistaModule } from './deportista/deportista.module';
import { ObjetivoModule } from './objetivo/objetivo.module';
import { EspecialistaModule } from './especialista/especialista.module';
import { EjercicioModule } from './ejercicio/ejercicio.module';
import { ZonacuerpoModule } from './zonacuerpo/zonacuerpo.module';
import { RutinaModule } from './rutina/rutina.module';
import { HomeModule } from './home/home.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    BrowserAnimationsModule,
    DeportistaModule,
    ObjetivoModule,
    EspecialistaModule,
    ModalDialogModule.forRoot(),
    RutinaModule,
    EjercicioModule,
    ZonacuerpoModule,
    HomeModule,
    NgbModule,
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
