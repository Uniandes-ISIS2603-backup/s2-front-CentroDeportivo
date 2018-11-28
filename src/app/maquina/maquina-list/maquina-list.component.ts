 import { Component, OnInit,ViewContainerRef  } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Maquina } from '../maquina';
import {MaquinaService} from '../maquina.service';
import {MaquinaDetail} from '../maquina-detail';



@Component({
  selector: 'app-maquina-list',
  templateUrl: './maquina-list.component.html',
  styleUrls: ['./maquina-list.component.css']
})
export class MaquinaListComponent implements OnInit {

  /**
   * Contructor del componente
   */
  constructor( private maquinaService: MaquinaService,
   private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }

  /**
   * La lista de maquinas del centro deportivo
   */
   maquinas: Maquina[];
   
  /**
   * El id de la maquina
   */
   maquina_id: number;
   
  /**
   * La maquina que el usuario va a ver
   */
   selectedMaquina : Maquina;
   
  /**
   * Muestra u oculta el maquina-create-component
   */
   showCreate: boolean;
   
  /**
   * Muestra u oculta el maquina-edit-component
   */
   showEdit: boolean;
   
  maquina_edit_id: number;

  /**
   * Funcion para definir en seleccion
   */
   onSelected(maquina_id: number):void {
    this.showCreate = false;
    this.maquina_id = maquina_id;
    
    this.selectedMaquina = new MaquinaDetail();
    this.getMaquinaDetail();
}   
 
  /**
   * Funcion para despliegue para creacion
   */ 
   showHideCreate(): void {
     if (this.selectedMaquina) {
            this.selectedMaquina = undefined;
            this.maquina_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    
  /**
   * Obtiene el servicio para actualizar la lista de maquinas
   */
   getMaquinas(): void {
        this.maquinaService.getMaquinas().subscribe(maquinas => this.maquinas = maquinas);
    }
  /**
   * Obtiene el detalle de la maquina
   */
   getMaquinaDetail(): void {
        console.log(this.maquina_id);
         this.maquinaService.getMaquinaDetail(this.maquina_id)
            .subscribe(selectedMaquina => {
                this.selectedMaquina = selectedMaquina
            });
    }
    /**
    * Muestra u oculta el componente editar
    */
    showHideEdit(objetivo_id: number): void {
        console.log(objetivo_id);
        if (!this.showEdit || (this.showEdit && objetivo_id != this.maquina_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.maquina_id = objetivo_id;
            this.maquina_edit_id = objetivo_id;
            this.selectedMaquina = new MaquinaDetail();
            this.getMaquinaDetail();
        }
        else {
            this.showEdit = false;
        }
    }
    /**
    * Actualizar
    */
    updateMaquina(): void{
        this.showEdit = false;
    }    
    
    /**
    * Elimina una maquina
    */
    deleteMaquina(maquinaId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar una máquina',
            childComponent: SimpleModalComponent,
            data: {text: '¿Seguro que desea eliminar la maquina del centro deportivo?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.maquinaService.deleteAuthor(maquinaId).subscribe(() => {
                            this.toastrService.error("La maquina se eliminó exitosamente", "Maquina elimindada");
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
      this.selectedMaquina = undefined;
      this.showEdit = false;
      this.maquina_id = undefined;
      this.getMaquinas();
  }

}
