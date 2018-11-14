import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {ImplementoService} from '../implemento.service';
import {ImplementoDetail} from '../implemento-detail';

@Component({
  selector: 'app-implemento-detail',
  templateUrl: './implemento-detail.component.html',
  styleUrls: ['./implemento-detail.component.css']
})
export class ImplementoDetailComponent implements OnInit {

    /**
    * El constructor del componente para el implemento
    * 
    */
  constructor( private implementoService: ImplementoService,
               private route: ActivatedRoute) { }


/**
    * el implemento al que se le mostraran los detalles
    */
    implementoDetail: ImplementoDetail;
   /**
    * el id asociado al implemento que se obtendra
    */
    implemento_id: number; 

/**
    * Metodo para obtener el detalle de un implemento
    */
  getImplementoDetail(): void {
         this.implementoService.getImplementoDetail(this.implemento_id)
            .subscribe(implementoDetail => {
                this.implementoDetail = implementoDetail;
            });
    }
  /**
    * Metodo que inicializa el componente
    */
  ngOnInit() {
    this.implemento_id = +this.route.snapshot.paramMap.get('id');
    this.implementoDetail = new ImplementoDetail();
    this.getImplementoDetail();

  }

}
