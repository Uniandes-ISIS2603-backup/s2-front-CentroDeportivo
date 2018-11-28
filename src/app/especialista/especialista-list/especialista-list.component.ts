import { Component, OnInit,ViewContainerRef, Input  } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Especialista } from '../especialista';
import {EspecialistaService} from '../especialista.service';
import {EspecialistaDetail} from '../especialista-detail';
import { ActivatedRoute } from '@angular/router';
/**
* El componente de la lista de especialistas
*/
@Component({
  selector: 'app-especialista-list',
  templateUrl: './especialista-list.component.html',
  styleUrls: ['./especialista-list.component.css']
})
export class EspecialistaListComponent implements OnInit {

  /**
   * Contructor del componente
   */
  constructor( private especialistaService: EspecialistaService,private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService,
        private route: ActivatedRoute ) { }

  /**
   * La lista de especialistas del centro deportivo
   */
   @Input() especialistas: Especialista[];
   /**
   * id del especialista seleccionado
   */
   especialista_id: number;
   /**
   * referencia al especialista seleccionado
   */
   selectedEspecialista : Especialista;
   /**
   * Muestra u oculta el especialista create
   */
   showCreate: boolean;
    /**
   * Muestra u oculta el especialista edit
   */
   showEdit: boolean;
   /**
   * id de especialista a editar
   */
  especialista_edit_id: number;
/**
   * Funcion para definir en seleccion
   */
onSelected(especialista_id: number):void {
        this.showCreate = false;
        this.especialista_id = especialista_id;
    this.selectedEspecialista = new EspecialistaDetail();
    this.getEspecialistaDetail();
}   
   /**
   * Funcion para despliegue para creacion
   */
showHideCreate(): void {
     if (this.selectedEspecialista) {
               this.selectedEspecialista = undefined;
               this.especialista_id = undefined;
        }
        this.showCreate = !this.showCreate;
        this.showEdit = false;
    }
    
  /**
   * Obtiene el servicio para actualizar la lista de especialistas
   */
   getEspecialistas(): void {
        this.especialistaService.getEspecialistas().subscribe(especialistas => this.especialistas = especialistas);
    }
    /**
   * Obtiene el detalle del especialista
   */
     getEspecialistaDetail(): void {
         this.especialistaService.getEspecialistaDetail(this.especialista_id)
            .subscribe(selectedEspecialista => {
                this.selectedEspecialista = selectedEspecialista
            });
    }
     /**
    * Muestra u oculta el componente editar
    */
    showHideEdit(objetivo_id: number): void {
        console.log(objetivo_id);
        if (!this.showEdit || (this.showEdit && objetivo_id != this.especialista_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.especialista_id = objetivo_id;
            this.especialista_edit_id = objetivo_id;
            this.selectedEspecialista = new EspecialistaDetail();
            this.getEspecialistaDetail();
        }
        else {
            this.showEdit = false;
        }
    }
    /**
    * Funcion para actualizar
    */
    updateEspecialista(): void{
        this.showEdit = false;
    } 
    /**
    * Funcion para eliminar
    */
    deleteEspecialista(especialistaId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar un Especialista',
            childComponent: SimpleModalComponent,
            data: {text: '¿Seguro que desea eliminar el especialista del centro deportivo?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.especialistaService.deleteEspecialista(especialistaId).subscribe(() => {
                            this.toastrService.error("El especialista se eliminó exitosamente", "Especialista elimindado");
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
      this.selectedEspecialista = undefined;
      this.showEdit = false;
      this.especialista_id = undefined;
      this.getEspecialistas();
  }

}
