import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ObjetivoService} from '../objetivo.service';
import {ObjetivoDetail} from '../objetivo-detail';

@Component({
  selector: 'app-objetivo-detail',
  templateUrl: './objetivo-detail.component.html',
  styleUrls: ['./objetivo-detail.component.css']
})
export class ObjetivoDetailComponent implements OnInit {

  /**
    * El constructor del componente para la objetivo
    */
    constructor(private objetivoService: ObjetivoService,
               private route: ActivatedRoute) { }
               
  /**
    * La objetivo a la que se le mostraran los detalles
    */
    objetivoDetail: ObjetivoDetail;
  
  /**
    * el id asociado a la objetivo que se obtendra
    */
    objetivo_id: number; 
    
  /**
    * Metodo para obtener el detalle de una objetivo
    */
    getObjetivoDetail(): void {
         this.objetivoService.getObjetivoDetail(this.objetivo_id)
            .subscribe(objetivoDetail => {
                this.objetivoDetail = objetivoDetail;
            });
    }
    
  /**
    * Metodo que inicializa el componente
    */
    ngOnInit() {
      this.objetivo_id = +this.route.snapshot.paramMap.get('id');
      this.objetivoDetail = new ObjetivoDetail();
      this.getObjetivoDetail();
    }

}
