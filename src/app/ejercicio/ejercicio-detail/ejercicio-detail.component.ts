import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {EjercicioService} from '../ejercicio.service';
import {EjercicioDetail} from '../ejercicio-detail';

@Component({
  selector: 'app-ejercicio-detail',
  templateUrl: './ejercicio-detail.component.html',
  styleUrls: ['./ejercicio-detail.component.css']
})
export class EjercicioDetailComponent implements OnInit {

/**
    * El constructor del componente para el ejercicio
    * 
    */
  constructor( private ejercicioService: EjercicioService,
               private route: ActivatedRoute) { }


 /**
    * el ejercicio al que se le mostraran los detalles
    */
    ejercicioDetail: EjercicioDetail;
  /**
    * el id asociado al ejercicio que se obtendra
    */
    ejercicio_id: number; 

/**
    * Metodo para obtener el detalle de un ejercicio
    */
  getEjercicioDetail(): void {
         this.ejercicioService.getEjercicioDetail(this.ejercicio_id)
            .subscribe(ejercicioDetail => {
                this.ejercicioDetail = ejercicioDetail;
            });
    }
  /**
    * Metodo que inicializa el componente
    */
  ngOnInit() {
  this.ejercicio_id = +this.route.snapshot.paramMap.get('id');
  this.ejercicioDetail = new EjercicioDetail();
        this.getEjercicioDetail();

  }

}
