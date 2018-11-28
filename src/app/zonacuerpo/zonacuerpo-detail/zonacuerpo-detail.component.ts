import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import {ZonacuerpoService} from '../zonacuerpo.service';
import {ZonacuerpoDetail} from '../zonacuerpo-detail';


@Component({
  selector: 'app-zonacuerpo-detail',
  templateUrl: './zonacuerpo-detail.component.html',
  styleUrls: ['./zonacuerpo-detail.component.css']
})
export class ZonacuerpoDetailComponent implements OnInit {

/**
    * El constructor del componente para el zonacuerpo
    * 
    */
  constructor(private zonacuerpoService: ZonacuerpoService,
               private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService,
         private router: Router) { }
 /**
    * el zonacuerpo al que se le mostraran los detalles
    */
  zonacuerpoDetail: ZonacuerpoDetail;
  /**
    * el id asociado al zonacuerpo que se obtendra
    */
  zonacuerpo_id: number;
  showEdit: boolean;
  zonacuerpo_edit_id: number;
  /**
    * Metodo para obtener el detalle de un zonacuerpo
    */
  getZonacuerpoDetail():void
  {
       this.zonacuerpoService.getZonacuerpoDetail(this.zonacuerpo_id)
            .subscribe(zonacuerpoDetail => {
                this.zonacuerpoDetail = zonacuerpoDetail;
            });
  }
  /**
    * Metodo que inicializa el componente
    */
  ngOnInit() {
       this.zonacuerpo_id = +this.route.snapshot.paramMap.get('id');
       this.zonacuerpoDetail = new ZonacuerpoDetail();
       this.showEdit = false;
       this.getZonacuerpoDetail();
  }
showHideEdit(zonacuerpo_id: number): void {
        if (!this.showEdit || (this.showEdit && zonacuerpo_id != this.zonacuerpo_edit_id)) {
            this.showEdit = true;
            this.zonacuerpo_edit_id = zonacuerpo_id;
        }
        else {
            this.showEdit = false;
        }
    }
        updateZonacuerpo(): void {
        this.showEdit = false;
    }
    deleteZonacuerpo(zonacuerpoId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete an zonacuerpo',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this zonacuerpo from the BookStore?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.zonacuerpoService.deleteZonacuerpo(zonacuerpoId).subscribe(() => {
                            this.toastrService.error("The zonacuerpo was successfully deleted", "Zonacuerpo deleted");
                           
                            this.router.navigate(['zonacuerpos/list']);
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
