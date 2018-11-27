import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Ejercicio } from '../ejercicio';
import {EjercicioService} from '../ejercicio.service';
import {EjercicioDetail} from '../ejercicio-detail';

@Component({
  selector: 'app-ejercicio-edit',
  templateUrl: './ejercicio-edit.component.html',
  styleUrls: ['./ejercicio-edit.component.css']
})
export class EjercicioEditComponent implements OnInit {

    constructor(private ejercicioService: EjercicioService,
        private toastrService: ToastrService) { }
        
  @Input() ejercicio_id: number;
  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();
  ejercicio: EjercicioDetail;
  
      getEjercicio(): void {
        this.ejercicioService.getEjercicioDetail(this.ejercicio_id)
            .subscribe(ejercicio => {
                this.ejercicio = ejercicio;
            });
    }
    editEjercicio(): void {
        this.ejercicioService.updateEjercicio(this.ejercicio)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The ejercicio's information was updated", "Ejercicio edition");
            });
    }
    cancelEdition(): void {
        this.cancel.emit();
    }
  ngOnInit() {
      this.ejercicio = new EjercicioDetail();
        this.getEjercicio();
  }
    ngOnChanges() {
            this.ngOnInit();
        }
}
