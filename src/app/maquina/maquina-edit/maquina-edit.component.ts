import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {MaquinaService} from '../maquina.service';
import {MaquinaDetail} from '../maquina-detail';

@Component({
  selector: 'app-maquina-edit',
  templateUrl: './maquina-edit.component.html',
  styleUrls: ['./maquina-edit.component.css']
})
export class MaquinaEditComponent implements OnInit {

  constructor(private maquinaService: MaquinaService,
        private toastrService: ToastrService) { }
        
  @Input() maquina_id: number;
  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();
  @Input() maquina: MaquinaDetail;
  
      getMaquina(): void {
          console.log(this.maquina_id);
        this.maquinaService.getMaquinaDetail(this.maquina_id)
            .subscribe(maquina => {
                this.maquina = maquina;
            });
    }
    editMaquina(): void {
        this.maquinaService.updateMaquina(this.maquina)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The maquina's information was updated", "Maquina edition");
            });
    }
    cancelEdition(): void {
        this.cancel.emit();
    }
  ngOnInit() {
      this.maquina = new MaquinaDetail();
      this.getMaquina();
  }
    ngOnChanges() {
            this.ngOnInit();
        }
}
