import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../objetivo';
import { ObjetivoService } from '../objetivo.service';
import {ObjetivoDetail} from '../objetivo-detail';

@Component({
  selector: 'app-objetivo-list',
  templateUrl: './objetivo-list.component.html',
  styleUrls: ['./objetivo-list.component.css']
})
export class ObjetivoListComponent implements OnInit {
  
  /**
   * La lista de objetivos del centro deportivo
   */
  objetivos: Objetivo[];
  
  /**
   * El id de la objetivo
   */
  objetivo_id: number;
  
  /**
   * La objetivo que el usuario va a ver
   */
  selectedObjetivo : Objetivo;
  
  /**
   * Muestra u oculta el objetivo-create-component
   */
  showCreate: boolean;
   
  
  /**
   * Contructor del componente
   */
  constructor(private objetivoService:ObjetivoService) { }

  /**
   * Obtiene el servicio para actualizar la lista de objetivos
   */
  getObjetivos(): void
  {
      this.objetivoService.getObjetivos().subscribe(objetivos => this.objetivos = objetivos);
  }
  
  /**
   * Funcion para definir en seleccion
   */
  onSelected(objetivo_id: number):void {
    this.showCreate = false;
    this.objetivo_id = objetivo_id;
    this.selectedObjetivo = new ObjetivoDetail();
    this.getObjetivoDetail();
}

  /**
   * Funcion para despliegue para creacion
   */   
  showHideCreate(): void {
     if (this.selectedObjetivo) {
               this.selectedObjetivo = undefined;
               this.objetivo_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    
  /**
   * Obtiene el detalle de la objetivo
   */  
  getObjetivoDetail(): void {
         this.objetivoService.getObjetivoDetail(this.objetivo_id)
            .subscribe(selectedObjetivo => {
                this.selectedObjetivo = selectedObjetivo
            });
    }
    
  /**
   * definicion de funcion para inicio
   */
  ngOnInit() {
      this.showCreate = false;
      this.selectedObjetivo = undefined;
      this.objetivo_id = undefined;
      this.getObjetivos();
  }

}
