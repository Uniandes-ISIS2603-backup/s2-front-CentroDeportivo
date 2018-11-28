import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {RutinaService} from '../rutina.service';
import {RutinaDetail} from '../rutina-detail';

@Component({
  selector: 'app-rutina-edit',
  templateUrl: './rutina-edit.component.html',
  styleUrls: ['./rutina-edit.component.css']
})
export class RutinaEditComponent implements OnInit {
/**
    * Constructor del componente
    */
  constructor(private rutinaService: RutinaService,
        private toastrService: ToastrService) { }
   /**
    * id recibido del componente padre
    */
  @Input() rutina_id: number;
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
  @Input() rutina: RutinaDetail;
  /**
    * funcion que obtiene las rutinas
    */
      getRutina(): void {
          console.log(this.rutina_id);
        this.rutinaService.getRutinaDetail(this.rutina_id)
            .subscribe(rutina => {
                this.rutina = rutina;
            });
    }
    /**
    * Actualiza informacion de la rutina
    */
    editRutina(): void {
        this.rutinaService.updateRutina(this.rutina)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The rutina's information was updated", "Rutina edition");
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
      this.rutina = new RutinaDetail();
      this.getRutina();
  }
  /**
    * Se utiliza cuando se va a editar otra rutina
    */
    ngOnChanges() {
            this.ngOnInit();
        }
}
