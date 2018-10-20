import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjetivoListComponent } from './objetivo-list/objetivo-list.component';
import { FormsModule } from '@angular/forms';
import { ObjetivoService } from './objetivo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ObjetivoListComponent],
  providers: [ObjetivoService],
  exports: [ObjetivoListComponent]
})
export class ObjetivoModule { }
