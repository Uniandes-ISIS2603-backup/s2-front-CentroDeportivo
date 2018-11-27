import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { Objetivo } from '../objetivo';
import { ObjetivoService } from '../objetivo.service';
import {ObjetivoDetail} from '../objetivo-detail';
import {ToastrService} from 'ngx-toastr';

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
  
  showEdit: boolean;
  
  /**
   * La objetivo que el usuario va a ver
   */
  selectedObjetivo : Objetivo;
  
  /**
   * Muestra u oculta el objetivo-create-component
   */
  showCreate: boolean;
   
  objetivo_edit_id: number;
  /**
   * Contructor del componente
   */
  constructor(private objetivoService:ObjetivoService,
   private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }

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
    showHideEdit(objetivo_id: number): void {
        if (!this.showEdit || (this.showEdit && objetivo_id != this.objetivo_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.objetivo_edit_id = objetivo_id;
        }
        else {
            this.showEdit = false;
        }
    }
        updateObjetivo(): void {
        this.showEdit = false;
    }
  /**
   * definicion de funcion para inicio
   */
  ngOnInit() {
      this.showCreate = false;
      this.showEdit = false;
      this.selectedObjetivo = undefined;
      this.objetivo_id = undefined;
      this.getObjetivos();
  }

}
