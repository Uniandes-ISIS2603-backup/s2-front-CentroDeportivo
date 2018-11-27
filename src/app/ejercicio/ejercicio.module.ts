import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioListComponent } from './ejercicio-list/ejercicio-list.component';
import { EjercicioDetailComponent } from './ejercicio-detail/ejercicio-detail.component';
import { EjercicioCreateComponent } from './ejercicio-create/ejercicio-create.component';

import { AppRoutingModule } from '../app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { EjercicioService } from './ejercicio.service';
import { FormsModule } from '@angular/forms';

import { NgbdCarouselBasic } from './carousel-basic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [     
        CommonModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,NgbModule
       
    ],
    declarations: [EjercicioListComponent, EjercicioDetailComponent,EjercicioCreateComponent,NgbdCarouselBasic],
    providers: [EjercicioService],
    exports:[EjercicioListComponent]
})
export class EjercicioModule { }



