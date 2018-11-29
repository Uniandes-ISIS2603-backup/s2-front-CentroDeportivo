import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { EspecialistaListComponent } from './especialista-list/especialista-list.component';
import { EspecialistaService } from './especialista.service';

import { EspecialistaDetailComponent } from './especialista-detail/especialista-detail.component';
import { EspecialistaCreateComponent } from './especialista-create/especialista-create.component';
import { EspecialistaEditComponent } from './especialista-edit/especialista-edit.component';
import { ObjetivoModule } from '../objetivo/objetivo.module';
import { DeportistaModule } from '../deportista/deportista.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasic } from './carousel-basic';
import {NgxPermissionsModule} from 'ngx-permissions';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ObjetivoModule,
    DeportistaModule,
    NgbModule,
    NgxPermissionsModule

  ],
  declarations: [EspecialistaListComponent, EspecialistaDetailComponent,EspecialistaCreateComponent, EspecialistaEditComponent,NgbdCarouselBasic],
  providers: [EspecialistaService],
  exports: [EspecialistaListComponent]
})
export class EspecialistaModule { }
