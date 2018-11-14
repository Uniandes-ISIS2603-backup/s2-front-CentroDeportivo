import { Component, OnInit } from '@angular/core';
import { Implemento } from '../implemento';
import { ImplementoService } from '../implemento.service';
import {ImplementoDetail} from '../implemento-detail';;

/**
 * The component for the list of implementos in the Centro Deportivo
 */
@Component({
    selector: 'list-implemento',
    templateUrl: './implemento-list.component.html', 
})
export class ImplementoListComponent implements OnInit {

    /**
   * Contructor del componente
   */
    constructor(private implementoService: ImplementoService) { }
    
     /**
    * La lista de ejercicios del centro deportivo
    */
    implementos: Implemento[];
    implemento_id: number;
    selectedImplemento: Implemento;
    showCreate: boolean;

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
    getImplementos(): void {
        this.implementoService.getImplementos().subscribe(implementos => this.implementos = implementos);
    }
    /**
    * Obtiene el detalle del especialista
    */
    getImplementoDetail(): void {
        this.implementoService.getImplementoDetail(this.implemento_id)
            .subscribe(selectedImplemento => {
                this.selectedImplemento = selectedImplemento
            });
     }

    /**
   * Definicion de funcion para inicio
   */
    ngOnInit() {
        this.showCreate = false;
        this.selectedImplemento = undefined;
        this.implemento_id = undefined;
        this.getImplementos();
    }
}