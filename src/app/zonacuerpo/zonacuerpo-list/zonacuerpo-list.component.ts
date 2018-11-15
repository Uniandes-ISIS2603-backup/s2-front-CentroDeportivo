import { Component, OnInit } from '@angular/core';
import { Zonacuerpo } from '../zonacuerpo';
import { ZonacuerpoService } from '../zonacuerpo.service';

import {ZonacuerpoDetail} from '../zonacuerpo-detail';
/**
 * The component for the list of zonacuerpos in the BookStore
 */
@Component({
    selector: 'app-zonacuerpo-list',
    templateUrl: './zonacuerpo-list.component.html', 
    styleUrls: ['./zonacuerpo-list.component.css']
})
export class ZonacuerpoListComponent implements OnInit {

   /**
   * Contructor del componente
   */
   constructor( private zonacuerpoService: ZonacuerpoService) { }
    
  /**
   * La lista de zonacuerpos del centro deportivo
   */
   zonacuerpos: Zonacuerpo[];
   
  /**
   * El id de la zonacuerpo
   */
   zonacuerpo_id: number;
   
  /**
   * La zonacuerpo que el usuario va a ver
   */
   selectedZonacuerpo : Zonacuerpo;
   
  /**
   * Muestra u oculta el zonacuerpo-create-component
   */ 
   showCreate: boolean;

//    /**
//     * Asks the service to update the list of zonacuerpos
//     */
   

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
   * Obtiene el servicio para actualizar la lista de zonacuerpos
   */
   getZonacuerpos(): void {
        this.zonacuerpoService.getZonacuerpos().subscribe(zonacuerpos => this.zonacuerpos = zonacuerpos);
    }
   
  /**
   * Obtiene el detalle de la zonacuerpo
   */
   getZonacuerpoDetail(): void {
         this.zonacuerpoService.getZonacuerpoDetail(this.zonacuerpo_id)
            .subscribe(selectedZonacuerpo => {
                this.selectedZonacuerpo = selectedZonacuerpo
            });
    }
   
  /**
   * definicion de funcion para inicio
   */
   ngOnInit() {
      this.showCreate = false;
      this.selectedZonacuerpo = undefined;
      this.zonacuerpo_id = undefined;
      this.getZonacuerpos();
  }
}