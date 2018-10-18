import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialistaListComponent } from './especialista-list/especialista-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EspecialistaListComponent],
  exports: [EspecialistaListComponent]
})
export class EspecialistaModule { }
