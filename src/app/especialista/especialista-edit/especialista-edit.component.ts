import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {EspecialistaService} from '../especialista.service';
import {EspecialistaDetail} from '../especialista-detail';

@Component({
  selector: 'app-especialista-edit',
  templateUrl: './especialista-edit.component.html',
  styleUrls: ['./especialista-edit.component.css']
})
export class EspecialistaEditComponent implements OnInit {

  constructor(private especialistaService: EspecialistaService,
        private toastrService: ToastrService) { }
        
  @Input() especialista_id: number;
  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();
  @Input() especialista: EspecialistaDetail;
  
      getEspecialista(): void {
          console.log(this.especialista_id);
        this.especialistaService.getEspecialistaDetail(this.especialista_id)
            .subscribe(especialista => {
                this.especialista = especialista;
            });
    }
    editEspecialista(): void {
        this.especialistaService.updateEspecialista(this.especialista)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The especialista's information was updated", "Especialista edition");
            });
    }
    cancelEdition(): void {
        this.cancel.emit();
    }
  ngOnInit() {
      this.especialista = new EspecialistaDetail();
      this.getEspecialista();
  }
    ngOnChanges() {
            this.ngOnInit();
        }
}
