import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeportistaListComponent } from './deportista-list/deportista-list.component';

import { FormsModule } from '@angular/forms';
import { DeportistaService } from './deportista.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DeportistaListComponent],
  providers: [DeportistaService],
  exports: [DeportistaListComponent]
})
export class DeportistaModule { }
