import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EjercicioListComponent } from './ejercicio-list/ejercicio-list.component';
import { EjercicioDetailComponent } from './ejercicio-detail/ejercicio-detail.component';
import { AppRoutingModule } from '../app-routing.module';

import { EjercicioService } from './ejercicio.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [       
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [EjercicioListComponent],
    providers: [EjercicioService],
    exports:[EjercicioListComponent]
})
export class EjercicioModule { }



