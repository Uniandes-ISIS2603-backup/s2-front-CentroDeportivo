import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeportistaListComponent } from './deportista-list/deportista-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeportistaService } from './deportista.service';
import { DeportistaDetailComponent } from './deportista-detail/deportista-detail.component';
import { DeportistaCreateComponent } from './deportista-create/deportista-create.component';
import { AppRoutingModule } from '../app-routing.module';

import { NgbdCarouselBasic } from './carousel-basic2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeportistaEditComponent } from './deportista-edit/deportista-edit.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [DeportistaListComponent, DeportistaDetailComponent, DeportistaCreateComponent,NgbdCarouselBasic, DeportistaEditComponent],
  providers: [DeportistaService],
  exports: [DeportistaListComponent]
})
export class DeportistaModule { }
