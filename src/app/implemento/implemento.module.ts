import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplementoListComponent } from './implemento-list/implemento-list.component';
import { ImplementoService } from './implemento.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ImplementoListComponent],
  providers: [ImplementoService],
  exports: [ImplementoListComponent]
})
export class ImplementoModule { }
