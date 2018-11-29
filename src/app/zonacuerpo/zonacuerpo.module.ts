import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonacuerpoListComponent } from './zonacuerpo-list/zonacuerpo-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ZonacuerpoService } from './zonacuerpo.service';
import { ZonacuerpoDetailComponent } from './zonacuerpo-detail/zonacuerpo-detail.component';
import { ZonacuerpoCreateComponent } from './zonacuerpo-create/zonacuerpo-create.component';
import { AppRoutingModule } from '../app-routing.module';

import { NgbdCarouselBasic } from './carousel-basic2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ZonacuerpoEditComponent } from './zonacuerpo-edit/zonacuerpo-edit.component';
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
  declarations: [ZonacuerpoListComponent, ZonacuerpoDetailComponent, ZonacuerpoCreateComponent,NgbdCarouselBasic, ZonacuerpoEditComponent],
  providers: [ZonacuerpoService],
  exports: [ZonacuerpoListComponent]
})
export class ZonacuerpoModule { }
