import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { Implemento } from '../implemento';
import { ImplementoService } from '../implemento.service';
import {ImplementoDetail} from '../implemento-detail';

@Component({
  selector: 'app-implemento-list',
  templateUrl: './implemento-list.component.html',
  styleUrls: ['./implemento-list.component.css']
})
export class ImplementoListComponent implements OnInit {

    /**
   * Contructor del componente
   */
  constructor(private implementoService:ImplementoService,
  private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }


/**
    * La lista de implementos del centro deportivo
    */
 implementos : Implemento[];
 selectedImplemento : Implemento;
 implemento_id: number;
 showCreate: boolean;
  showEdit: boolean;
  implemento_edit_id: number;
   
 /**
   * Funcion para definir en seleccion
   */
onSelected(implemento_id: number):void {
        this.showCreate = false;
        this.implemento_id = implemento_id;
    this.selectedImplemento = new ImplementoDetail();
    this.getImplementoDetail();
}   
 
/**
   * Funcion para despliegue para creacion
   */  
showHideCreate(): void {
     if (this.selectedImplemento) {
               this.selectedImplemento = undefined;
               this.implemento_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    /**
   * Obtiene el servicio para actualizar la lista de especialistas
   */
    getImplementoDetail(): void {
         this.implementoService.getImplementoDetail(this.implemento_id)
            .subscribe(selectedImplemento => {
                this.selectedImplemento = selectedImplemento
            });
    }
    /**
    * Obtiene el detalle del especialista
    */
 getImplementos(): void{
     this.implementoService.getImplementos().subscribe(implementos => this.implementos = implementos);
 }
 showHideEdit(implemento_id: number): void {
        if (!this.showEdit || (this.showEdit && implemento_id != this.implemento_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.implemento_edit_id = implemento_id;
        }
        else {
            this.showEdit = false;
        }
    }
    updateImplemento(): void {
        this.showEdit = false;
    }

    /**
    * Deletes an implemento
    */
    deleteImplemento(implementoId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete an implemento',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this implemento from the BookStore?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.implementoService.deleteImplemento(implementoId).subscribe(() => {
                            this.toastrService.error("The implemento was successfully deleted", "Implemento deleted");
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
      this.selectedImplemento = undefined;
      this.implemento_id = undefined;
      this.getImplementos();
  }
}
