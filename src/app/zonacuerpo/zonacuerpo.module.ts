import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonacuerpoListComponent } from './zonacuerpo-list/zonacuerpo-list.component';

import { ZonacuerpoService } from './zonacuerpo.service';
import { FormsModule } from '@angular/forms';
import { ZonacuerpoDetailComponent } from './zonacuerpo-detail/zonacuerpo-detail.component';

@NgModule({
    imports: [       
        CommonModule,
        FormsModule
    ],
    declarations: [ZonacuerpoListComponent, ZonacuerpoDetailComponent],
    providers: [ZonacuerpoService],
    exports:[ZonacuerpoListComponent]
})
export class ZonacuerpoModule { }