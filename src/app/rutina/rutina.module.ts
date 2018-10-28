import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinaListComponent } from './rutina-list/rutina-list.component';

import { RutinaService } from './rutina.service';
import { FormsModule } from '@angular/forms';

import { RutinaDetailComponent } from './rutina-detail/rutina-detail.component';

@NgModule({
  imports: [
    CommonModule,
      FormsModule
  ],
  declarations: [RutinaListComponent, RutinaDetailComponent],
  providers: [RutinaService],
  exports: [RutinaListComponent]
})
export class RutinaModule { }