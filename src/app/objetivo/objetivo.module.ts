import { ObjetivoListComponent } from './objetivo-list/objetivo-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ObjetivoService } from './objetivo.service';
import { ObjetivoDetailComponent } from './objetivo-detail/objetivo-detail.component';
import { ObjetivoCreateComponent } from './objetivo-create/objetivo-create.component';
import { AppRoutingModule } from '../app-routing.module';
import { ObjetivoEditComponent } from './objetivo-edit/objetivo-edit.component';
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
  declarations: [ObjetivoListComponent, ObjetivoDetailComponent, ObjetivoCreateComponent, ObjetivoEditComponent],
  providers: [ObjetivoService],
  exports: [ObjetivoListComponent]
})
export class ObjetivoModule { }
