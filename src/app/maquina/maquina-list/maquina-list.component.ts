import { Component, OnInit,ViewContainerRef  } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Maquina } from '../maquina';
import {MaquinaService} from '../maquina.service';
import {MaquinaDetail} from '../maquina-detail';


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
   * El id de la maquina
   */
   maquina_id: number;
   
  /**
   * La maquina que el usuario va a ver
   */
   selectedMaquina : Maquina;
   
  /**
   * Muestra u oculta el maquina-create-component
   */
   showCreate: boolean;

  /**
   * Funcion para definir en seleccion
   */
   onSelected(maquina_id: number):void {
    this.showCreate = false;
    this.maquina_id = maquina_id;
    this.selectedMaquina = new MaquinaDetail();
    this.getMaquinaDetail();
}   
 
  /**
   * Funcion para despliegue para creacion
   */ 
   showHideCreate(): void {
     if (this.selectedMaquina) {
            this.selectedMaquina = undefined;
            this.maquina_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    
  /**
   * Obtiene el servicio para actualizar la lista de maquinas
   */
   getMaquinas(): void {
        this.maquinaService.getMaquinas().subscribe(maquinas => this.maquinas = maquinas);
    }
  /**
   * Obtiene el detalle de la maquina
   */
   getMaquinaDetail(): void {
         this.maquinaService.getMaquinaDetail(this.maquina_id)
            .subscribe(selectedMaquina => {
                this.selectedMaquina = selectedMaquina
            });
    }
  /**
   * definicion de funcion para inicio
   */ 
   ngOnInit() {
      this.showCreate = false;
      this.selectedMaquina = undefined;
      this.maquina_id = undefined;
      this.getMaquinas();
  }

}
