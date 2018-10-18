import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeportistaListComponent } from './deportista-list/deportista-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeportistaListComponent],
  exports: [DeportistaListComponent]
})
export class DeportistaModule { }
