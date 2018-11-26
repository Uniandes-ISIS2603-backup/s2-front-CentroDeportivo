import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {ObjetivoService} from '../objetivo.service';
import {ObjetivoDetail} from '../objetivo-detail';

@Component({
  selector: 'app-objetivo-edit',
  templateUrl: './objetivo-edit.component.html',
  styleUrls: ['./objetivo-edit.component.css']
})
export class ObjetivoEditComponent implements OnInit {

  constructor(private objetivoService: ObjetivoService,
        private toastrService: ToastrService) { }
        
  @Input() objetivo_id: number;
  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();
  objetivo: ObjetivoDetail;
  
      getObjetivo(): void {
        this.objetivoService.getObjetivoDetail(this.objetivo_id)
            .subscribe(objetivo => {
                this.objetivo = objetivo;
            });
    }
    editObjetivo(): void {
        this.objetivoService.updateObjetivo(this.objetivo)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The objetivo's information was updated", "Objetivo edition");
            });
    }
    cancelEdition(): void {
        this.cancel.emit();
    }
  ngOnInit() {
      this.objetivo = new ObjetivoDetail();
        this.getObjetivo();
  }
    ngOnChanges() {
            this.ngOnInit();
        }
}
