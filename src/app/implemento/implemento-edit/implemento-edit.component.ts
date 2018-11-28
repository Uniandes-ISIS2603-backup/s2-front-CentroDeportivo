import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Implemento } from '../implemento';
import {ImplementoService} from '../implemento.service';
import {ImplementoDetail} from '../implemento-detail';

@Component({
  selector: 'app-implemento-edit',
  templateUrl: './implemento-edit.component.html',
  styleUrls: ['./implemento-edit.component.css']
})
export class ImplementoEditComponent implements OnInit {

    constructor(private implementoService: ImplementoService,
        private toastrService: ToastrService) { }
        
  @Input() implemento_id: number;
  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();
  implemento: ImplementoDetail;
  
      getImplemento(): void {
        this.implementoService.getImplementoDetail(this.implemento_id)
            .subscribe(implemento => {
                this.implemento = implemento;
            });
    }
    editImplemento(): void {
        this.implementoService.updateImplemento(this.implemento)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The implemento's information was updated", "Implemento edition");
            });
    }
    cancelEdition(): void {
        this.cancel.emit();
    }
  ngOnInit() {
      this.implemento = new ImplementoDetail();
        this.getImplemento();
  }
    ngOnChanges() {
            this.ngOnInit();
        }
}
