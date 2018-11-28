import {Component, OnInit, ViewContainerRef, Input} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ActivatedRoute} from '@angular/router';
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


@Input() zonacuerpos: Zonacuerpo[];
    /**
   * Contructor del componente
   */
  constructor(private zonacuerpoService:ZonacuerpoService,
  private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService,
        private route: ActivatedRoute) { }


/**
    * La lista de zonacuerpos del centro deportivo
    */
 selectedZonacuerpo : Zonacuerpo;
   vZonacuerpos = true;
 zonacuerpo_id: number;
 showCreate: boolean;
  showEdition: boolean;
  zonacuerpo_edit_id: number;
     allZonacuerpos: string = 'no';
  showCarousel:boolean;
  /**
   * Obtiene el servicio para actualizar la lista de zonacuerpos
   */
  getZonacuerpos(): void{
     this.zonacuerpoService.getZonacuerpos().subscribe(zonacuerpos => this.zonacuerpos = zonacuerpos);
 }
  setVZonacuerpos():void
  {
      this.vZonacuerpos = !this.vZonacuerpos;
  }
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
    showCarousel(){
        this.showCarousel = !this.showCarousel;
    }
 /**
   * Definicion de funcion para inicio
   */
  ngOnInit() {
      this.route.queryParams.filter(params => params.allZonacuerpos).subscribe(params => {console.log(params); 

        this.allZonacuerpos = params.allZonacuerpos;
       
      });
      if (this.allZonacuerpos == 'yes'){
      
       this.getZonacuerpos();
       this.showCarousel();
      }
       
      
      
      this.showCreate = false;
      this.showEdition = false;
      this.selectedZonacuerpo = undefined;
      this.zonacuerpo_id = undefined;
      
     
  }
}
