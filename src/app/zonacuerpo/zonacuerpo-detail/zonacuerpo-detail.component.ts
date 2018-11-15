import { Component, OnInit } from '@angular/core'

import { ActivatedRoute } from '@angular/router';

import {ZonacuerpoService} from '../zonacuerpo.service';
import {ZonacuerpoDetail} from '../zonacuerpo-detail';


@Component({
  selector: 'app-zonacuerpo-detail',
  templateUrl: './zonacuerpo-detail.component.html',
  styleUrls: ['./zonacuerpo-detail.component.css']
})
export class ZonacuerpoDetailComponent implements OnInit {

    /**
     * El constructor del componente para la zonacuerpo
     */
    constructor( private zonacuerpoService: ZonacuerpoService,
                 private route: ActivatedRoute) { }


   /**
    * La zonacuerpo a la que se le mostraran los detalles
    */
    zonacuerpoDetail: ZonacuerpoDetail;

   /**
    * el id asociado a la zonacuerpo que se obtendra
    */
    zonacuerpo_id: number; 

   /**
    * Metodo para obtener el detalle de una zonacuerpo
    */
    getZonacuerpoDetail(): void {
         this.zonacuerpoService.getZonacuerpoDetail(this.zonacuerpo_id)
            .subscribe(zonacuerpoDetail => {
                this.zonacuerpoDetail = zonacuerpoDetail;
            });
    }
  
   /**
    * Metodo que inicializa el componente
    */
    ngOnInit() {
    this.zonacuerpo_id = +this.route.snapshot.paramMap.get('id');
    this.zonacuerpoDetail = new ZonacuerpoDetail();
          this.getZonacuerpoDetail();

  }
}
