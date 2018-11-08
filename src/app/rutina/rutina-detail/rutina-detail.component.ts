import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {RutinaService} from '../rutina.service';
import {RutinaDetail} from '../rutina-detail';

@Component({
  selector: 'app-rutina-detail',
  templateUrl: './rutina-detail.component.html',
  styleUrls: ['./rutina-detail.component.css']
})
export class RutinaDetailComponent implements OnInit {
/**
    * El constructor del componente para la rutina
    * 
    */
  constructor( private rutinaService: RutinaService,
               private route: ActivatedRoute) { }


 /**
    *La rutina a la que se mostraran los detalles
    */
    rutinaDetail: RutinaDetail;
  /**
    * el id asociado a la rutina que se obtendra
    */
    rutina_id: number; 

/**
    * Metodo para obtener el detalle de una rutina
    */
  getRutinaDetail(): void {
         this.rutinaService.getRutinaDetail(this.rutina_id)
            .subscribe(rutinaDetail => {
                this.rutinaDetail = rutinaDetail;
            });
    }
  /**
    * Metodo que inicializa el componente
    */
  ngOnInit() {
  this.rutina_id = +this.route.snapshot.paramMap.get('id');
  this.rutinaDetail = new RutinaDetail();
        this.getRutinaDetail();

  }

}
