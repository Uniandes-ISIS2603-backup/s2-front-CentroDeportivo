import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { Deportista } from '../deportista';
import { DeportistaService } from '../deportista.service';
import {DeportistaDetail} from '../deportista-detail';

@Component({
  selector: 'app-deportista-list',
  templateUrl: './deportista-list.component.html',
  styleUrls: ['./deportista-list.component.css']
})
export class DeportistaListComponent implements OnInit {

    /**
   * Contructor del componente
   */
  constructor(private deportistaService:DeportistaService,
  private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }


/**
    * La lista de deportistas del centro deportivo
    */
 deportistas : Deportista[];
 selectedDeportista : Deportista;
 deportista_id: number;
 showCreate: boolean;
  showEdit: boolean;
  deportista_edit_id: number;
   
 /**
   * Funcion para definir en seleccion
   */
onSelected(deportista_id: number):void {
        this.showCreate = false;
        this.deportista_id = deportista_id;
    this.selectedDeportista = new DeportistaDetail();
    this.getDeportistaDetail();
}   
 
/**
   * Funcion para despliegue para creacion
   */  
showHideCreate(): void {
     if (this.selectedDeportista) {
               this.selectedDeportista = undefined;
               this.deportista_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    /**
   * Obtiene el servicio para actualizar la lista de especialistas
   */
    getDeportistaDetail(): void {
         this.deportistaService.getDeportistaDetail(this.deportista_id)
            .subscribe(selectedDeportista => {
                this.selectedDeportista = selectedDeportista
            });
    }
    /**
    * Obtiene el detalle del especialista
    */
 getDeportistas(): void{
     this.deportistaService.getDeportistas().subscribe(deportistas => this.deportistas = deportistas);
 }
 showHideEdit(deportista_id: number): void {
        if (!this.showEdit || (this.showEdit && deportista_id != this.deportista_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.deportista_edit_id = deportista_id;
        }
        else {
            this.showEdit = false;
        }
    }
    updateDeportista(): void {
        this.showEdit = false;
    }

    /**
    * Deletes an deportista
    */
    deleteDeportista(deportistaId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete an deportista',
            childComponent: SimpleModalComponent,
            data: {text: 'Seguro que desea eliminar este deportista del centrodeportivo??'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.deportistaService.deleteDeportista(deportistaId).subscribe(() => {
                            this.toastrService.error("Deportista correctamente eliminado", "Deportista deleted");
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
      this.selectedDeportista = undefined;
      this.deportista_id = undefined;
      this.getDeportistas();
  }
}
