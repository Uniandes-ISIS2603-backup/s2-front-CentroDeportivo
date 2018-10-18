import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonacuerpoListComponent } from './zonacuerpo-list/zonacuerpo-list.component';

import { ZonacuerpoService } from './zonacuerpo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [       
        CommonModule,
        FormsModule
    ],
    declarations: [ZonacuerpoListComponent],
    providers: [ZonacuerpoService],
    exports:[ZonacuerpoListComponent]
})
export class ZonacuerpoModule { }