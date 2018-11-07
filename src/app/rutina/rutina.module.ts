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

import { ObjetivoModule } from '../objetivo/objetivo.module';

@NgModule({
  imports: [
     BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ObjetivoModule,
  ],
  declarations: [RutinaListComponent, RutinaDetailComponent, RutinaCreateComponent],
  providers: [RutinaService],
  exports: [RutinaListComponent]
})
export class RutinaModule { }