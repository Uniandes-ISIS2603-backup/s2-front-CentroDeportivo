import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MaquinaListComponent } from './maquina-list/maquina-list.component';
import { MaquinaService } from './maquina.service';
import { AppRoutingModule } from '../app-routing.module';
import { MaquinaDetailComponent } from './maquina-detail/maquina-detail.component';
import { MaquinaCreateComponent } from './maquina-create/maquina-create.component';
import { MaquinaEditComponent } from './maquina-edit/maquina-edit.component';
import { EjercicioModule } from '../ejercicio/ejercicio.module';
import { NgbdCarouselBasic } from './carousel-basic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    EjercicioModule,
    NgbModule,
    NgxPermissionsModule
    
  ],
  declarations: [MaquinaListComponent, MaquinaDetailComponent, MaquinaCreateComponent, MaquinaEditComponent,NgbdCarouselBasic],
  providers: [MaquinaService]
//  exports: [MaquinaListComponent]
})
export class MaquinaModule { }
