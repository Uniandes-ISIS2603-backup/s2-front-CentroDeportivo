import { Component, OnInit } from '@angular/core';
import { Maquina } from '../maquina';
import {MaquinaService} from '../maquina.service';


@Component({
  selector: 'app-maquina-list',
  templateUrl: './maquina-list.component.html',
  styleUrls: ['./maquina-list.component.css']
})
export class MaquinaListComponent implements OnInit {

  /**
   * Contructor del componente
   */
  constructor( private maquinaService: MaquinaService ) { }

  /**
   * La lista de maquinas del centro deportivo
   */
   maquinas: Maquina[];
   
  /**
   * Obtiene el servicio para actualizar la lista de maquinas
   */
   getMaquinas(): void {
        this.maquinaService.getMaquinas().subscribe(maquinas => this.maquinas = maquinas);
    }
   
  ngOnInit() {
      this.getMaquinas();
  }

}
