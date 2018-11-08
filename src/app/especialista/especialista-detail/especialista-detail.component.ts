import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {EspecialistaService} from '../especialista.service';
import {EspecialistaDetail} from '../especialista-detail';

@Component({
  selector: 'app-especialista-detail',
  templateUrl: './especialista-detail.component.html',
  styleUrls: ['./especialista-detail.component.css']
})
export class EspecialistaDetailComponent implements OnInit {
/**
    * El constructor del componente para lel especialista
    * 
    */
  constructor( private especialistaService: EspecialistaService,
               private route: ActivatedRoute) { }


 /**
    * el especialista al que se le mostraran los detalles
    */
    especialistaDetail: EspecialistaDetail;
  /**
    * el id asociado al especialista que se obtendra
    */
    especialista_id: number; 

/**
    * Metodo para obtener el detalle de un especialista
    */
  getEspecialistaDetail(): void {
         this.especialistaService.getEspecialistaDetail(this.especialista_id)
            .subscribe(especialistaDetail => {
                this.especialistaDetail = especialistaDetail;
            });
    }
    /**
    * Metodo que inicializa el componente
    */
  ngOnInit() {
  this.especialista_id = +this.route.snapshot.paramMap.get('id');
  this.especialistaDetail = new EspecialistaDetail();
        this.getEspecialistaDetail();

  }

}
