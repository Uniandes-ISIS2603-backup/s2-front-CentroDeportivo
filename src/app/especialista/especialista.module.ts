import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialistaListComponent } from './especialista-list/especialista-list.component';

import { EspecialistaService } from './especialista.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
      FormsModule
  ],
  declarations: [EspecialistaListComponent],
  providers: [EspecialistaService],
  exports: [EspecialistaListComponent]
})
export class EspecialistaModule { }
