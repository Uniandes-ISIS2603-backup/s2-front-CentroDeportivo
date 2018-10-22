import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinaListComponent } from './rutina-list/rutina-list.component';

import { RutinaService } from './rutina.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
      FormsModule
  ],
  declarations: [RutinaListComponent],
  providers: [RutinaService],
  exports: [RutinaListComponent]
})
export class RutinaModule { }