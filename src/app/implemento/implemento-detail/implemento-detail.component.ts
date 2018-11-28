import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import {ImplementoService} from '../implemento.service';
import {ImplementoDetail} from '../implemento-detail';


@Component({
  selector: 'app-implemento-detail',
  templateUrl: './implemento-detail.component.html',
  styleUrls: ['./implemento-detail.component.css']
})
export class ImplementoDetailComponent implements OnInit {

/**
    * El constructor del componente para el implemento
    * 
    */
  constructor(private implementoService: ImplementoService,
               private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService,
         private router: Router) { }
 /**
    * el implemento al que se le mostraran los detalles
    */
  implementoDetail: ImplementoDetail;
  /**
    * el id asociado al implemento que se obtendra
    */
  implemento_id: number;
  showEdit: boolean;
  implemento_edit_id: number;
  /**
    * Metodo para obtener el detalle de un implemento
    */
  getImplementoDetail():void
  {
       this.implementoService.getImplementoDetail(this.implemento_id)
            .subscribe(implementoDetail => {
                this.implementoDetail = implementoDetail;
            });
  }
  /**
    * Metodo que inicializa el componente
    */
  ngOnInit() {
       this.implemento_id = +this.route.snapshot.paramMap.get('id');
       this.implementoDetail = new ImplementoDetail();
       this.showEdit = false;
       this.getImplementoDetail();
  }
showHideEdit(implemento_id: number): void {
        if (!this.showEdit || (this.showEdit && implemento_id != this.implemento_edit_id)) {
            this.showEdit = true;
            this.implemento_edit_id = implemento_id;
        }
        else {
            this.showEdit = false;
        }
    }
        updateImplemento(): void {
        this.showEdit = false;
    }
    deleteImplemento(implementoId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Borrar un implemento',
            childComponent: SimpleModalComponent,
            data: {text: '¿Está seguro de que desea borrar el implemento?'},
            actionButtons: [
                {
                    text: 'Sí',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.implementoService.deleteImplemento(implementoId).subscribe(() => {
                            this.toastrService.error("The implemento was successfully deleted", "Implemento deleted");
                           
                            this.router.navigate(['implementos/list']);
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
