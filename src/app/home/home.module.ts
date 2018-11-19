import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import {AppComponent} from '../app.component';
import {HomeComponent} from './home.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
   BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    NgbModule
  ],
  declarations: [
    HomeComponent
  ],
  
  bootstrap: [AppComponent],

})
export class HomeModule {}
