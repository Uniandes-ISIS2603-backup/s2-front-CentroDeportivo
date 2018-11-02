import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjetivoListComponent } from './objetivo-list/objetivo-list.component';
import { FormsModule } from '@angular/forms';
import { ObjetivoService } from './objetivo.service';
import { ObjetivoDetailComponent } from './objetivo-detail/objetivo-detail.component';
import { ObjetivoCreateComponent } from './objetivo-create/objetivo-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ObjetivoListComponent, ObjetivoDetailComponent, ObjetivoCreateComponent],
  providers: [ObjetivoService],
  exports: [ObjetivoListComponent]
})
export class ObjetivoModule { }
