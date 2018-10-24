import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { EjercicioService } from '../ejercicio.service';

import { Ejercicio } from '../ejercicio';

@Component({
    selector: 'app-ejercicio-detail',
    templateUrl: './ejercicio-detail.component.html',
    styleUrls: ['./ejercicio-detail.component.css']
})
export class EjercicioDetailComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param ejercicioService The ejercicio's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private ejercicioService: EjercicioService,
     
    ) { }

    /**
    * The ejercicio
    */
    ejercicio: Ejercicio;

    /**
    * The ejercicio's id that we will pass to the book list component
    * to show the ejercicio's books
    */
    ejercicio_id: number;

    /**
    * The function which obtains the ejercicio whose details we want to show
    */
//    getEjercicio(): void {
//        this.ejercicioService.getEjercicio(this.ejercicio_id)
//            .subscribe(ejercicio => {
//                this.ejercicio = ejercicio
//            });
//    }


    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.ejercicio_id = +this.route.snapshot.paramMap.get('id');
      
//        
//        this.getEjercicio();
        
    }

}