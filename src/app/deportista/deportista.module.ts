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
import {ObjetivoModule} from '../objetivo/objetivo.module';
import { NgbdCarouselBasic } from './carousel-basic2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeportistaEditComponent } from './deportista-edit/deportista-edit.component';
import { DeportistaAddObjetivoComponent } from './deportista-add-objetivo/deportista-add-objetivo.component';
import { DeportistaObjetivosComponent } from './deportista-objetivos/deportista-objetivos.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ObjetivoModule,
    FormsModule,
    NgbModule
  ],
  declarations: [DeportistaListComponent, DeportistaDetailComponent, DeportistaCreateComponent,NgbdCarouselBasic, DeportistaEditComponent, DeportistaAddObjetivoComponent, DeportistaObjetivosComponent],
  providers: [DeportistaService],
  exports: [DeportistaListComponent]
})
export class DeportistaModule { }
