import { Component, OnInit } from '@angular/core';
import { Especialista } from '../especialista';
import {EspecialistaService} from '../especialista.service';


@Component({
  selector: 'app-especialista-list',
  templateUrl: './especialista-list.component.html',
  styleUrls: ['./especialista-list.component.css']
})
export class EspecialistaListComponent implements OnInit {

  /**
   * Contructor del componente
   */
  constructor( private especialistaService: EspecialistaService ) { }

  /**
   * La lista de especialistas del centro deportivo
   */
   especialistas: Especialista[];
   
  /**
   * Obtiene el servicio para actualizar la lista de especialistas
   */
   getEspecialistas(): void {
        this.especialistaService.getEspecialistas().subscribe(especialistas => this.especialistas = especialistas);
    }
   
  ngOnInit() {
      this.getEspecialistas();
  }
}