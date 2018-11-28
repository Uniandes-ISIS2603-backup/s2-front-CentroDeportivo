import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { RutinaListComponent } from './rutina-list/rutina-list.component';
import { RutinaService } from './rutina.service';

import { RutinaDetailComponent } from './rutina-detail/rutina-detail.component';
import { RutinaCreateComponent } from './rutina-create/rutina-create.component';
import { RutinaEditComponent } from './rutina-edit/rutina-edit.component';

import { ObjetivoModule } from '../objetivo/objetivo.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasic } from './carousel-basic';

@NgModule({
  imports: [
     BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ObjetivoModule,
     NgbModule
  ],
  declarations: [RutinaListComponent, RutinaDetailComponent, RutinaCreateComponent,RutinaEditComponent,NgbdCarouselBasic],
  providers: [RutinaService],
  exports: [RutinaListComponent]
})
export class RutinaModule { }