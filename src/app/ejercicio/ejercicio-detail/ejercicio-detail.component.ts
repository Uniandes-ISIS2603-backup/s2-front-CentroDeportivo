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

  constructor( private ejercicioService: EjercicioService,
               private route: ActivatedRoute) { }


 /**
    * The editorial whose details we want to show
    */
    ejercicioDetail: EjercicioDetail;
  
    ejercicio_id: number; 


  getEjercicioDetail(): void {
         this.ejercicioService.getEjercicioDetail(this.ejercicio_id)
            .subscribe(ejercicioDetail => {
                this.ejercicioDetail = ejercicioDetail;
            });
    }
  
  ngOnInit() {
  this.ejercicio_id = +this.route.snapshot.paramMap.get('id');
  this.ejercicioDetail = new EjercicioDetail();
        this.getEjercicioDetail();

  }

}
