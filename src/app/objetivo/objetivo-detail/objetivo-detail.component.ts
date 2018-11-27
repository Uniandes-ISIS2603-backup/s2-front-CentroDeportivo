import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import {ObjetivoService} from '../objetivo.service';
import {ObjetivoDetail} from '../objetivo-detail';

@Component({
  selector: 'app-objetivo-detail',
  templateUrl: './objetivo-detail.component.html',
  styleUrls: ['./objetivo-detail.component.css']
})
export class ObjetivoDetailComponent implements OnInit {

  /**
    * El constructor del componente para la objetivo
    */
    constructor(private objetivoService: ObjetivoService,
               private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService,
        private router: Router) { }
               
  /**
    * La objetivo a la que se le mostraran los detalles
    */
    objetivoDetail: ObjetivoDetail;
    showEdit: boolean;
  /**
    * el id asociado a la objetivo que se obtendra
    */
    objetivo_id: number; 
    objetivo_edit_id: number;
    
  /**
    * Metodo para obtener el detalle de una objetivo
    */
    getObjetivoDetail(): void {
         this.objetivoService.getObjetivoDetail(this.objetivo_id)
            .subscribe(objetivoDetail => {
                this.objetivoDetail = objetivoDetail;
            });
    }
    
  /**
    * Metodo que inicializa el componente
    */
    ngOnInit() {
      this.objetivo_id = +this.route.snapshot.paramMap.get('id');
      this.objetivoDetail = new ObjetivoDetail();
      this.showEdit = false;
      this.getObjetivoDetail();
    }
    showHideEdit(objetivo_id: number): void {
        if (!this.showEdit || (this.showEdit && objetivo_id != this.objetivo_edit_id)) {
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
    deleteObjetivo(objetivoId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete an objetivo',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this objetivo from the BookStore?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.objetivoService.deleteObjetivo(objetivoId).subscribe(() => {
                            this.toastrService.error("The objetivo was successfully deleted", "Objetivo deleted");
                            this.router.navigate(['objetivos/list']);
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
        
    }
}
