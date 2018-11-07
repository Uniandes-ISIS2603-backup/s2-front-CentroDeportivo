import { Component, OnInit,ViewContainerRef  } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Rutina } from '../rutina';
import {RutinaService} from '../rutina.service';
import {RutinaDetail} from '../rutina-detail';


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
   rutina_id: number;
   selectedRutina : Rutina;
   showCreate: boolean;


onSelected(rutina_id: number):void {
        this.showCreate = false;
        this.rutina_id = rutina_id;
    this.selectedRutina = new RutinaDetail();
    this.getRutinaDetail();
}   
   
showHideCreate(): void {
     if (this.selectedRutina) {
               this.selectedRutina = undefined;
               this.rutina_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    
  /**
   * Obtiene el servicio para actualizar la lista de rutinas
   */
   getRutinas(): void {
        this.rutinaService.getRutinas().subscribe(rutinas => this.rutinas = rutinas);
    }
    
     getRutinaDetail(): void {
         this.rutinaService.getRutinaDetail(this.rutina_id)
            .subscribe(selectedRutina => {
                this.selectedRutina = selectedRutina
            });
    }
   
  ngOnInit() {
      this.showCreate = false;
      this.selectedRutina = undefined;
      this.rutina_id = undefined;
      this.getRutinas();
  }

}
