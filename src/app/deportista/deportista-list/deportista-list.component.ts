import { Component, OnInit } from '@angular/core';
import { Deportista } from '../deportista';
import { DeportistaService } from '../deportista.service';
import {DeportistaDetail} from '../deportista-detail';

@Component({
  selector: 'app-deportista-list',
  templateUrl: './deportista-list.component.html',
  styleUrls: ['./deportista-list.component.css']
})
export class DeportistaListComponent implements OnInit {

    /**
   * Contructor del componente
   */
  constructor(private deportistaService:DeportistaService) { }


/**
    * La lista de deportistas del centro deportivo
    */
 deportistas : Deportista[];
 selectedDeportista : Deportista;
 deportista_id: number;
 showCreate: boolean;
   
 /**
   * Funcion para definir en seleccion
   */
onSelected(deportista_id: number):void {
        this.showCreate = false;
        this.deportista_id = deportista_id;
    this.selectedDeportista = new DeportistaDetail();
    this.getDeportistaDetail();
}   
 
/**
   * Funcion para despliegue para creacion
   */  
showHideCreate(): void {
     if (this.selectedDeportista) {
               this.selectedDeportista = undefined;
               this.deportista_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    /**
   * Obtiene el servicio para actualizar la lista de especialistas
   */
    getDeportistaDetail(): void {
         this.deportistaService.getDeportistaDetail(this.deportista_id)
            .subscribe(selectedDeportista => {
                this.selectedDeportista = selectedDeportista
            });
    }
    /**
    * Obtiene el detalle del especialista
    */
 getDeportistas(): void{
     this.deportistaService.getDeportistas().subscribe(deportistas => this.deportistas = deportistas);
 }
 /**
   * Definicion de funcion para inicio
   */
  ngOnInit() {
      this.showCreate = false;
      this.selectedDeportista = undefined;
      this.deportista_id = undefined;
      this.getDeportistas();
  }
}
