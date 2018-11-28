import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { Zonacuerpo } from '../zonacuerpo';
import { ZonacuerpoService } from '../zonacuerpo.service';
import {ZonacuerpoDetail} from '../zonacuerpo-detail';

@Component({
  selector: 'app-zonacuerpo-list',
  templateUrl: './zonacuerpo-list.component.html',
  styleUrls: ['./zonacuerpo-list.component.css']
})
export class ZonacuerpoListComponent implements OnInit {

    /**
   * Contructor del componente
   */
  constructor(private zonacuerpoService:ZonacuerpoService,
  private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }


/**
    * La lista de zonacuerpos del centro deportivo
    */
 zonacuerpos : Zonacuerpo[];
 selectedZonacuerpo : Zonacuerpo;
 zonacuerpo_id: number;
 showCreate: boolean;
  showEdition: boolean;
  zonacuerpo_edit_id: number;
   
 /**
   * Funcion para definir en seleccion
   */
onSelected(zonacuerpo_id: number):void {
        this.showCreate = false;
        this.zonacuerpo_id = zonacuerpo_id;
    this.selectedZonacuerpo = new ZonacuerpoDetail();
    this.getZonacuerpoDetail();
}   
 
/**
   * Funcion para despliegue para creacion
   */  
showHideCreate(): void {
     if (this.selectedZonacuerpo) {
               this.selectedZonacuerpo = undefined;
               this.zonacuerpo_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    /**
   * Obtiene el servicio para actualizar la lista de especialistas
   */
    getZonacuerpoDetail(): void {
         this.zonacuerpoService.getZonacuerpoDetail(this.zonacuerpo_id)
            .subscribe(selectedZonacuerpo => {
                this.selectedZonacuerpo = selectedZonacuerpo
            });
    }
    /**
    * Obtiene el detalle de la zonacuerpo
    */
 getZonacuerpos(): void{
     this.zonacuerpoService.getZonacuerpos().subscribe(zonacuerpos => this.zonacuerpos = zonacuerpos);
 }
 showHideEdit(zonacuerpo_id: number): void {
        if (!this.showEdition || (this.showEdition && zonacuerpo_id != this.zonacuerpo_edit_id)) 
            {
            this.showCreate = false;
            this.showEdition = true;
            this.zonacuerpo_edit_id = zonacuerpo_id;}
        else {
            this.showEdition = false;
        }
    }
    updateZonacuerpo(): void {
        this.showEdition = false;
    }

    /**
    * Borra una zonacuerpo
    */
    deleteZonacuerpo(zonacuerpoId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Borrar Zonacuerpo',
            childComponent: SimpleModalComponent,
            data: {text: 'Seguro que quiere borrar esta zonacuerpo?'},
            actionButtons: [
                {text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.zonacuerpoService.deleteZonacuerpo(zonacuerpoId).subscribe(() => {this.toastrService.error("The zonacuerpo fue borrada", "Zonacuerpo deleted");this.ngOnInit();}, err => {this.toastrService.error(err, "Error"); }); return true;} },
                {text: 'No', onAction: () => true}
            ]
        });
    }
 /**
   * Definicion de funcion para inicio
   */
  ngOnInit() {
      this.showCreate = false;
       this.showEdition = false;
      this.selectedZonacuerpo = undefined;
      this.zonacuerpo_id = undefined;
      this.getZonacuerpos();
  }
}
