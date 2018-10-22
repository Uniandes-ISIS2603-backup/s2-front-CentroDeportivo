import { Component, OnInit } from '@angular/core';
import { Rutina } from '../rutina';
import {RutinaService} from '../rutina.service';


@Component({
  selector: 'app-rutina-list',
  templateUrl: './rutina-list.component.html',
  styleUrls: ['./rutina-list.component.css']
})
export class RutinaListComponent implements OnInit {

  /**
   * Contructor del componente
   */
  constructor( private rutinaService: RutinaService ) { }

  /**
   * La lista de rutinas del centro deportivo
   */
   rutinas: Rutina[];
   
  /**
   * Obtiene el servicio para actualizar la lista de rutinas
   */
   getRutinas(): void {
        this.rutinaService.getRutinas().subscribe(rutinas => this.rutinas = rutinas);
    }
   
  ngOnInit() {
      this.getRutinas();
  }
}