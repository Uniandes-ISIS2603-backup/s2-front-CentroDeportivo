import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioListComponent } from './ejercicio-list/ejercicio-list.component';
import { EjercicioDetailComponent } from './ejercicio-detail/ejercicio-detail.component';
import { EjercicioCreateComponent } from './ejercicio-create/ejercicio-create.component';

import { AppRoutingModule } from '../app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { EjercicioService } from './ejercicio.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ZonacuerpoModule} from '../zonacuerpo/zonacuerpo.module';
import { NgbdCarouselBasic } from './carousel-basic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EjercicioEditComponent } from './ejercicio-edit/ejercicio-edit.component';
import { EjercicioZonacuerposComponent } from './ejercicio-zonacuerpos/ejercicio-zonacuerpos.component';
import { EjercicioAddZonacuerposComponent } from './ejercicio-add-zonacuerpos/ejercicio-add-zonacuerpos.component';
import {NgxPermissionsModule} from 'ngx-permissions';


@NgModule({
    imports: [     
        BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ZonacuerpoModule,
    FormsModule,
    NgbModule,
    NgxPermissionsModule
       
    ],
    declarations: [EjercicioListComponent, EjercicioDetailComponent,EjercicioCreateComponent,NgbdCarouselBasic, EjercicioEditComponent, EjercicioZonacuerposComponent, EjercicioAddZonacuerposComponent],
    providers: [EjercicioService],
    exports:[EjercicioListComponent]
})
export class EjercicioModule { }



