import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjetivoListComponent } from './objetivo-list/objetivo-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ObjetivoListComponent],
  exports: [ObjetivoListComponent]
})
export class ObjetivoModule { }
