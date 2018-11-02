import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeportistaListComponent } from './deportista-list/deportista-list.component';

import { FormsModule } from '@angular/forms';
import { DeportistaService } from './deportista.service';
import { DeportistaDetailComponent } from './deportista-detail/deportista-detail.component';
import { DeportistaCreateComponent } from './deportista-create/deportista-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DeportistaListComponent, DeportistaDetailComponent, DeportistaCreateComponent],
  providers: [DeportistaService],
  exports: [DeportistaListComponent]
})
export class DeportistaModule { }
