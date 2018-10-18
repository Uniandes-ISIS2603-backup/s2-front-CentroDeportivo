import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplementoListComponent } from './implemento-list/implemento-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImplementoListComponent],
  exports: [ImplementoListComponent]
})
export class ImplementoModule { }
