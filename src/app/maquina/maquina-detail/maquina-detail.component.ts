import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MaquinaService} from '../maquina.service';
import {MaquinaDetail} from '../maquina-detail';

@Component({
  selector: 'app-maquina-detail',
  templateUrl: './maquina-detail.component.html',
  styleUrls: ['./maquina-detail.component.css']
})
export class MaquinaDetailComponent implements OnInit {

    /**
    * El constructor del componente para la maquina
    */
    constructor( private maquinaService: MaquinaService,
               private route: ActivatedRoute) { }


    /**
    * La maquina a la que se le mostraran los detalles
    */
    maquinaDetail: MaquinaDetail;
  
    /**
    * el id asociado a la maquina que se obtendra
    */
    maquina_id: number; 

    /**
    * Metodo para obtener el detalle de una maquina
    */
    getMaquinaDetail(): void {
         this.maquinaService.getMaquinaDetail(this.maquina_id)
            .subscribe(maquinaDetail => {
                this.maquinaDetail = maquinaDetail;
            });
    }
  
    /**
    * Metodo que inicializa el componente
    */
    ngOnInit() {
    this.maquina_id = +this.route.snapshot.paramMap.get('id');
    this.maquinaDetail = new MaquinaDetail();
          this.getMaquinaDetail();

  }

}
