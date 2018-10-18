import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../ejercicio';
import { EjercicioService } from '../ejercicio.service';

/**
 * The component for the list of ejercicios in the BookStore
 */
@Component({
    selector: 'app-ejercicio-list',
    templateUrl: './ejercicio-list.component.html', 
})
export class EjercicioListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param ejercicioService The author's services provider
     */
    constructor(
//    private ejercicioService: EjercicioService
    ) { }
    
    /**
     * The list of ejercicios which belong to the BookStore
     */
    ejercicios: Ejercicio[];

//    /**
//     * Asks the service to update the list of ejercicios
//     */
//    getEjercicios(): void {
//        this.ejercicioService.getEjercicios().subscribe(ejercicios => this.ejercicios = ejercicios);
//        console.log(this.ejercicios[0].id);
//    }

    /**
     * This will initialize the component by retrieving the list of ejercicios from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
//        this.getEjercicios();
    }
}