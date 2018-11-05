import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonacuerpoListComponent } from './zonacuerpo-list/zonacuerpo-list.component';
import { ZonacuerpoService } from './zonacuerpo.service';
import { ZonacuerpoDetailComponent } from './zonacuerpo-detail/zonacuerpo-detail.component';
import { ZonacuerpoCreateComponent } from './zonacuerpo-create/zonacuerpo-create.component';


import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [ZonacuerpoListComponent, ZonacuerpoDetailComponent,ZonacuerpoCreateComponent],
    providers: [ZonacuerpoService],
    exports:[ZonacuerpoListComponent]
})
export class ZonacuerpoModule { }