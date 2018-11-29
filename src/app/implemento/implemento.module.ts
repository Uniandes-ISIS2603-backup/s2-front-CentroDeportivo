import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplementoListComponent } from './implemento-list/implemento-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImplementoService } from './implemento.service';
import { ImplementoDetailComponent } from './implemento-detail/implemento-detail.component';
import { ImplementoCreateComponent } from './implemento-create/implemento-create.component';
import { AppRoutingModule } from '../app-routing.module';

import { NgbdCarouselBasic } from './carousel-basic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImplementoEditComponent } from './implemento-edit/implemento-edit.component';
import {NgxPermissionsModule} from 'ngx-permissions';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    NgxPermissionsModule
  ],
  declarations: [ImplementoListComponent, ImplementoDetailComponent, ImplementoCreateComponent,NgbdCarouselBasic, ImplementoEditComponent],
  providers: [ImplementoService],
  exports: [ImplementoListComponent]
})
export class ImplementoModule { }
