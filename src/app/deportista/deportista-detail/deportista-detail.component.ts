import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DeportistaService} from '../deportista.service';
import {DeportistaDetail} from '../deportista-detail';

@Component({
  selector: 'app-deportista-detail',
  templateUrl: './deportista-detail.component.html',
  styleUrls: ['./deportista-detail.component.css']
})
export class DeportistaDetailComponent implements OnInit {

/**
    * El constructor del componente para el deportista
    * 
    */
  constructor(private deportistaService: DeportistaService,
               private route: ActivatedRoute) { }
 /**
    * el deportista al que se le mostraran los detalles
    */
  deportistaDetail: DeportistaDetail;
  /**
    * el id asociado al deportista que se obtendra
    */
  deportista_id: number;
  /**
    * Metodo para obtener el detalle de un deportista
    */
  getDeportistaDetail():void
  {
       this.deportistaService.getDeportistaDetail(this.deportista_id)
            .subscribe(deportistaDetail => {
                this.deportistaDetail = deportistaDetail;
            });
  }
  /**
    * Metodo que inicializa el componente
    */
  ngOnInit() {
       this.deportista_id = +this.route.snapshot.paramMap.get('id');
  this.deportistaDetail = new DeportistaDetail();
        this.getDeportistaDetail();
  }

}
