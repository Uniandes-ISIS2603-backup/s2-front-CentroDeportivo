import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialistaListComponent } from './especialista-list/especialista-list.component';

import { EspecialistaService } from './especialista.service';
import { FormsModule } from '@angular/forms';

import { EspecialistaDetailComponent } from './especialista-detail/especialista-detail.component';

@NgModule({
  imports: [
    CommonModule,
      FormsModule
  ],
  declarations: [EspecialistaListComponent, EspecialistaDetailComponent],
  providers: [EspecialistaService],
  exports: [EspecialistaListComponent]
})
export class EspecialistaModule { }
