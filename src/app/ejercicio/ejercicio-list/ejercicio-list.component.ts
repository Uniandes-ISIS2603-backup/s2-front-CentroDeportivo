import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../ejercicio';
import { EjercicioService } from '../ejercicio.service';
import {EjercicioDetail} from '../ejercicio-detail';
/**
 * The component for the list of ejercicios in the BookStore
 */
@Component({
    selector: 'app-ejercicio-list',
    templateUrl: './ejercicio-list.component.html', 
    styleUrls: ['./ejercicio-list.component.css']
})
export class EjercicioListComponent implements OnInit {

    
  /**
   * Contructor del componente
   */
    constructor( private ejercicioService: EjercicioService) { }
    
    /**
    * La lista de ejercicios del centro deportivo
    */
    ejercicios: Ejercicio[];
    ejercicio_id: number;
   selectedEjercicio : Ejercicio;
   showCreate: boolean;

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
    getEjercicios(): void {
        this.ejercicioService.getEjercicios().subscribe(ejercicios => this.ejercicios = ejercicios);
    }
    /**
    * Obtiene el detalle del especialista
    */
     getEjercicioDetail(): void {
         this.ejercicioService.getEjercicioDetail(this.ejercicio_id)
            .subscribe(selectedEjercicio => {
                this.selectedEjercicio = selectedEjercicio
            });
    }
   /**
   * Definicion de funcion para inicio
   */
  ngOnInit() {
      this.showCreate = false;
      this.selectedEjercicio = undefined;
      this.ejercicio_id = undefined;
      this.getEjercicios();
  }
    
}