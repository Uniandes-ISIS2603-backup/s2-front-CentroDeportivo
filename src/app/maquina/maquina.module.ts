import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaquinaListComponent } from './maquina-list/maquina-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MaquinaListComponent],
  exports: [MaquinaListComponent]
})
export class MaquinaModule { }
