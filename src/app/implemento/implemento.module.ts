import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplementoListComponent } from './implemento-list/implemento-list.component';
import { ImplementoService } from './implemento.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImplementoDetailComponent } from './implemento-detail/implemento-detail.component';
import { ImplementoCreateComponent } from './implemento-create/implemento-create.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ImplementoListComponent, ImplementoDetailComponent, ImplementoCreateComponent],
  providers: [ImplementoService]
  //exports: [ImplementoListComponent]
})
export class ImplementoModule { }
