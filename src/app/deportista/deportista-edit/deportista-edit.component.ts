import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Deportista } from '../deportista';
import {DeportistaService} from '../deportista.service';
import {DeportistaDetail} from '../deportista-detail';

@Component({
  selector: 'app-deportista-edit',
  templateUrl: './deportista-edit.component.html',
  styleUrls: ['./deportista-edit.component.css']
})
export class DeportistaEditComponent implements OnInit {

    constructor(private deportistaService: DeportistaService,
        private toastrService: ToastrService) { }
        
  @Input() deportista_id: number;
  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();
  deportista: DeportistaDetail;
  
      getDeportista(): void {
        this.deportistaService.getDeportistaDetail(this.deportista_id)
            .subscribe(deportista => {
                this.deportista = deportista;
            });
    }
    editDeportista(): void {
        this.deportistaService.updateDeportista(this.deportista)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The deportista's information was updated", "Deportista edition");
            });
    }
    cancelEdition(): void {
        this.cancel.emit();
    }
  ngOnInit() {
      this.deportista = new DeportistaDetail();
        this.getDeportista();
  }
    ngOnChanges() {
            this.ngOnInit();
        }
}
