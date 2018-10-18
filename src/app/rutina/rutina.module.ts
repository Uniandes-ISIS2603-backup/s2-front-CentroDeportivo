import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinaListComponent } from './rutina-list/rutina-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RutinaListComponent],
  exports: [RutinaListComponent]
})
export class RutinaModule { }
