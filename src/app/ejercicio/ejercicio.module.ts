import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioListComponent } from './ejercicio-list/ejercicio-list.component';

import { EjercicioService } from './ejercicio.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        EjercicioListComponent
    ],
    declarations: [EjercicioListComponent],
    providers: [EjercicioService],
    exports:[EjercicioListComponent]
})
export class EjercicioModule { }



