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
/**
    * Constructor del componente
    */
  constructor(private especialistaService: EspecialistaService,
        private toastrService: ToastrService) { }
       /**
    * id recibido del componente padre
    */ 
  @Input() especialista_id: number;
   /**
    * Output que dice a componente padre que no se quiere editar 
    */
  @Output() cancel = new EventEmitter();
  /**
    * Output que dice a componente padre que se quiere editar 
    */
  @Output() update = new EventEmitter();
  /**
    * Detalle de la rutina
    */
  @Input() especialista: EspecialistaDetail;
  /**
    * Funcion que obtiene los especialistas
    */
      getEspecialista(): void {
          console.log(this.especialista_id);
        this.especialistaService.getEspecialistaDetail(this.especialista_id)
            .subscribe(especialista => {
                this.especialista = especialista;
            });
    }
    /**
    * Actualiza informacion especialistas
    */
    editEspecialista(): void {
        this.especialistaService.updateEspecialista(this.especialista)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The especialista's information was updated", "Especialista edition");
            });
    }
    /**
    * Cancela edicion
    */
    cancelEdition(): void {
        this.cancel.emit();
    }
     /**
    * Inicializa el componente
    */
  ngOnInit() {
      this.especialista = new EspecialistaDetail();
      this.getEspecialista();
  }
  /**
    * Se utiliza cuando se va a editar otro especialista
    */
    ngOnChanges() {
            this.ngOnInit();
        }
}
