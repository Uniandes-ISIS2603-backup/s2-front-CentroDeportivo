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
     * Constructor for the component
     * @param ejercicioService The author's services provider
     */
    constructor( private ejercicioService: EjercicioService) { }
    
    /**
     * The list of ejercicios which belong to the BookStore
     */
    ejercicios: Ejercicio[];
    ejercicio_id: number;
   selectedEjercicio : Ejercicio;
   showCreate: boolean;

//    /**
//     * Asks the service to update the list of ejercicios
//     */
   

onSelected(ejercicio_id: number):void {
        this.showCreate = false;
        this.ejercicio_id = ejercicio_id;
    this.selectedEjercicio = new EjercicioDetail();
    this.getEjercicioDetail();
}   
   
showHideCreate(): void {
     if (this.selectedEjercicio) {
               this.selectedEjercicio = undefined;
               this.ejercicio_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    getEjercicios(): void {
        this.ejercicioService.getEjercicios().subscribe(ejercicios => this.ejercicios = ejercicios);
    }
    
     getEjercicioDetail(): void {
         this.ejercicioService.getEjercicioDetail(this.ejercicio_id)
            .subscribe(selectedEjercicio => {
                this.selectedEjercicio = selectedEjercicio
            });
    }
   
  ngOnInit() {
      this.showCreate = false;
      this.selectedEjercicio = undefined;
      this.ejercicio_id = undefined;
      this.getEjercicios();
  }
    
}