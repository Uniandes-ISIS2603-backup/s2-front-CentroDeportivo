import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplementoListComponent } from './implemento-list/implemento-list.component';
import { ImplementoService } from './implemento.service';
import { FormsModule } from '@angular/forms';
import { ImplementoDetailComponent } from './implemento-detail/implemento-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ImplementoListComponent, ImplementoDetailComponent],
  providers: [ImplementoService],
  exports: [ImplementoListComponent]
})
export class ImplementoModule { }
