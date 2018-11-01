import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioListComponent } from './ejercicio-list/ejercicio-list.component';
import { EjercicioDetailComponent } from './ejercicio-detail/ejercicio-detail.component';
import { AppRoutingModule } from '../app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { EjercicioService } from './ejercicio.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
       
    ],
    declarations: [EjercicioListComponent, EjercicioDetailComponent],
    providers: [EjercicioService],
    exports:[EjercicioListComponent]
})
export class EjercicioModule { }



