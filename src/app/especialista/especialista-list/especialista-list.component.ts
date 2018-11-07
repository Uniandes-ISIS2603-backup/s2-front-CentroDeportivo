import { Component, OnInit,ViewContainerRef  } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Especialista } from '../especialista';
import {EspecialistaService} from '../especialista.service';
import {EspecialistaDetail} from '../especialista-detail';


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
   especialista_id: number;
   selectedEspecialista : Especialista;
   showCreate: boolean;


onSelected(especialista_id: number):void {
        this.showCreate = false;
        this.especialista_id = especialista_id;
    this.selectedEspecialista = new EspecialistaDetail();
    this.getEspecialistaDetail();
}   
   
showHideCreate(): void {
     if (this.selectedEspecialista) {
               this.selectedEspecialista = undefined;
               this.especialista_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    
  /**
   * Obtiene el servicio para actualizar la lista de especialistas
   */
   getEspecialistas(): void {
        this.especialistaService.getEspecialistas().subscribe(especialistas => this.especialistas = especialistas);
    }
    
     getEspecialistaDetail(): void {
         this.especialistaService.getEspecialistaDetail(this.especialista_id)
            .subscribe(selectedEspecialista => {
                this.selectedEspecialista = selectedEspecialista
            });
    }
   
  ngOnInit() {
      this.showCreate = false;
      this.selectedEspecialista = undefined;
      this.especialista_id = undefined;
      this.getEspecialistas();
  }

}
