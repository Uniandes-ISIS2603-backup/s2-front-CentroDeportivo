import { Component, OnInit,ViewContainerRef  } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Rutina } from '../rutina';
import {RutinaService} from '../rutina.service';
import {RutinaDetail} from '../rutina-detail';


@Component({
  selector: 'app-rutina-list',
  templateUrl: './rutina-list.component.html',
  styleUrls: ['./rutina-list.component.css']
})
export class RutinaListComponent implements OnInit {

  /**
   * Contructor del componente
   */
  constructor( private rutinaService: RutinaService,private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService ) { }

  /**
   * La lista de rutinas del centro deportivo
   */
   rutinas: Rutina[];
   /**
   * id de la rutina seleccionada
   */
   rutina_id: number;
   /**
   * referencia a la rutina seleccionada
   */
   selectedRutina : Rutina;
   /**
   * Muestra u oculta rutina create
   */
   showCreate: boolean;
 /**
   * Muestra u oculta el rutina edit
   */
   showEdit: boolean;
   /**
   * id de rutina a editar
   */
  rutina_edit_id: number;
/**
   * Funcion para definir en seleccion
   */
onSelected(rutina_id: number):void {
        this.showCreate = false;
        this.rutina_id = rutina_id;
    this.selectedRutina = new RutinaDetail();
    this.getRutinaDetail();
}   
    /**
   * Funcion para despliegue para creacion
   */
showHideCreate(): void {
     if (this.selectedRutina) {
               this.selectedRutina = undefined;
               this.rutina_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    
  /**
   * Obtiene el servicio para actualizar la lista de rutinas
   */
   getRutinas(): void {
        this.rutinaService.getRutinas().subscribe(rutinas => this.rutinas = rutinas);
    }
      /**
   * Obtiene el detalle de la rutina
   */
     getRutinaDetail(): void {
         this.rutinaService.getRutinaDetail(this.rutina_id)
            .subscribe(selectedRutina => {
                this.selectedRutina = selectedRutina
            });
    }
     /**
    * Muestra u oculta el componente editar
    */
    showHideEdit(objetivo_id: number): void {
        console.log(objetivo_id);
        if (!this.showEdit || (this.showEdit && objetivo_id != this.rutina_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.rutina_id = objetivo_id;
            this.rutina_edit_id = objetivo_id;
            this.selectedRutina = new RutinaDetail();
            this.getRutinaDetail();
        }
        else {
            this.showEdit = false;
        }
    }
    /**
    * Funcion para actualizar
    */
    updateRutina(): void{
        this.showEdit = false;
    } 
    /**
    * Funcion para eliminar
    */
    deleteRutina(rutinaId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar un Rutina',
            childComponent: SimpleModalComponent,
            data: {text: '¿Seguro que desea eliminar la rutina del centro deportivo?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.rutinaService.deleteRutina(rutinaId).subscribe(() => {
                            this.toastrService.error("La rutina se eliminó exitosamente", "Rutina elimindada");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }
    /**
   * definicion de funcion para inicio
   */
  ngOnInit() {
      this.showCreate = false;
      this.selectedRutina = undefined;
      this.showEdit = false;
      this.rutina_id = undefined;
      this.getRutinas();
  }

}
