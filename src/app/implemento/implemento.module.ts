import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplementoService } from './implemento.service';
import { ImplementoListComponent } from './implemento-list/implemento-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImplementoDetailComponent } from './implemento-detail/implemento-detail.component';
import { ImplementoCreateComponent } from './implemento-create/implemento-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ImplementoListComponent, ImplementoDetailComponent, ImplementoCreateComponent],
  providers: [ImplementoService],
  bootstrap: [ImplementoListComponent]
  //exports: [ImplementoListComponent]
})
export class ImplementoModule { }
