import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { Ejercicio } from '../ejercicio';
import { EjercicioService } from '../ejercicio.service';
import {EjercicioDetail} from '../ejercicio-detail';

@Component({
  selector: 'app-ejercicio-list',
  templateUrl: './ejercicio-list.component.html',
  styleUrls: ['./ejercicio-list.component.css']
})
export class EjercicioListComponent implements OnInit {

    /**
   * Contructor del componente
   */
  constructor(private ejercicioService:EjercicioService,
  private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }


/**
    * La lista de ejercicios del centro deportivo
    */
 ejercicios : Ejercicio[];
 selectedEjercicio : Ejercicio;
 ejercicio_id: number;
 showCreate: boolean;
  showEdit: boolean;
  ejercicio_edit_id: number;
   
 /**
   * Funcion para definir en seleccion
   */
onSelected(ejercicio_id: number):void {
        this.showCreate = false;
        this.ejercicio_id = ejercicio_id;
    this.selectedEjercicio = new EjercicioDetail();
    this.getEjercicioDetail();
}   
 
/**
   * Funcion para despliegue para creacion
   */  
showHideCreate(): void {
     if (this.selectedEjercicio) {
               this.selectedEjercicio = undefined;
               this.ejercicio_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
   
    /**
   * Obtiene el servicio para actualizar la lista de especialistas
   */
    getEjercicioDetail(): void {
         this.ejercicioService.getEjercicioDetail(this.ejercicio_id)
            .subscribe(selectedEjercicio => {
                this.selectedEjercicio = selectedEjercicio
            });
    }
    /**
    * Obtiene el detalle del especialista
    */
 getEjercicios(): void{
     this.ejercicioService.getEjercicios().subscribe(ejercicios => this.ejercicios = ejercicios);
 }
 showHideEdit(ejercicio_id: number): void {
        if (!this.showEdit || (this.showEdit && ejercicio_id != this.ejercicio_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.ejercicio_edit_id = ejercicio_id;
        }
        else {
            this.showEdit = false;
        }
    }
    updateEjercicio(): void {
        this.showEdit = false;
    }

    /**
    * Deletes an ejercicio
    */
    deleteEjercicio(ejercicioId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete an ejercicio',
            childComponent: SimpleModalComponent,
            data: {text: 'Seguro que quiere borrar este ejercicio?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.ejercicioService.deleteEjercicio(ejercicioId).subscribe(() => {
                            this.toastrService.error("Este ejercicio fue correctamente borrado", "Ejercicio borrado");
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
   * Definicion de funcion para inicio
   */
  ngOnInit() {
      this.showCreate = false;
       this.showEdit = false;
      this.selectedEjercicio = undefined;
      this.ejercicio_id = undefined;
      this.getEjercicios();
  }
}
