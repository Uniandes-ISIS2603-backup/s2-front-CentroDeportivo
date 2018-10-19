import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaquinaListComponent } from './maquina-list/maquina-list.component';

import { MaquinaService } from './maquina.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
      FormsModule
  ],
  declarations: [MaquinaListComponent],
  providers: [MaquinaService],
  exports: [MaquinaListComponent]
})
export class MaquinaModule { }
