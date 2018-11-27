import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import {DeportistaService} from '../deportista.service';
import {DeportistaDetail} from '../deportista-detail';


@Component({
  selector: 'app-deportista-detail',
  templateUrl: './deportista-detail.component.html',
  styleUrls: ['./deportista-detail.component.css']
})
export class DeportistaDetailComponent implements OnInit {

/**
    * El constructor del componente para el deportista
    * 
    */
  constructor(private deportistaService: DeportistaService,
               private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService,
         private router: Router) { }
 /**
    * el deportista al que se le mostraran los detalles
    */
  deportistaDetail: DeportistaDetail;
  /**
    * el id asociado al deportista que se obtendra
    */
  deportista_id: number;
  showEdit: boolean;
  deportista_edit_id: number;
  /**
    * Metodo para obtener el detalle de un deportista
    */
  getDeportistaDetail():void
  {
       this.deportistaService.getDeportistaDetail(this.deportista_id)
            .subscribe(deportistaDetail => {
                this.deportistaDetail = deportistaDetail;
            });
  }
  /**
    * Metodo que inicializa el componente
    */
  ngOnInit() {
       this.deportista_id = +this.route.snapshot.paramMap.get('id');
       this.deportistaDetail = new DeportistaDetail();
       this.showEdit = false;
       this.getDeportistaDetail();
  }
showHideEdit(deportista_id: number): void {
        if (!this.showEdit || (this.showEdit && deportista_id != this.deportista_edit_id)) {
            this.showEdit = true;
            this.deportista_edit_id = deportista_id;
        }
        else {
            this.showEdit = false;
        }
    }
        updateDeportista(): void {
        this.showEdit = false;
    }
    deleteDeportista(deportistaId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete an deportista',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this deportista from the BookStore?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.deportistaService.deleteDeportista(deportistaId).subscribe(() => {
                            this.toastrService.error("The deportista was successfully deleted", "Deportista deleted");
                           
                            this.router.navigate(['deportistas/list']);
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
