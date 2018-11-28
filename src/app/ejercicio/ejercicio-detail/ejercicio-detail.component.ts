import {Component, OnInit, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import {EjercicioService} from '../ejercicio.service';
import {EjercicioDetail} from '../ejercicio-detail';
import {ZonacuerpoService} from '../../zonacuerpo/zonacuerpo.service';
import {Zonacuerpo} from '../../zonacuerpo/zonacuerpo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ejercicio-detail',
  templateUrl: './ejercicio-detail.component.html',
  styleUrls: ['./ejercicio-detail.component.css']
})
export class EjercicioDetailComponent implements OnInit {
zonacuerpoService:ZonacuerpoService;
zonacuerpos: Observable<Zonacuerpo[]>;
/**
    * El constructor del componente para el ejercicio
    * 
    */
  constructor(private ejercicioService: EjercicioService,
               private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService,
         private router: Router) { }
 /**
    * el ejercicio al que se le mostraran los detalles
    */
   @Input()ejercicioDetail: EjercicioDetail;
  /**
    * el id asociado al ejercicio que se obtendra
    */
  ejercicio_id: number;
  showEdit: boolean;
  ejercicio_edit_id: number;
  allZonacuerpos: string = 'no';
  /**
    * Metodo para obtener el detalle de un ejercicio
    */
  getEjercicioDetail():void
  {
       this.ejercicioService.getEjercicioDetail(this.ejercicio_id)
            .subscribe(ejercicioDetail => {
                this.ejercicioDetail = ejercicioDetail;
                console.log(ejercicioDetail);
            });
  }
  /**
    * Metodo que inicializa el componente
    */
  ngOnInit() {
      this.route.queryParams.filter(params => params.allZonacuerpos).subscribe(params => {console.log(params); 

        this.allZonacuerpos = params.allZonacuerpos;
        console.log(this.allZonacuerpos); 
      });
      if (this.allZonacuerpos == 'yes'){
          console.log("allZonacuerpos");
      
      this.zonacuerpos = this.zonacuerpoService.getZonacuerpos();
      }
       this.ejercicio_id = +this.route.snapshot.paramMap.get('id');
       this.ejercicioDetail = new EjercicioDetail();
       this.showEdit = false;
       this.getEjercicioDetail();
  }
showHideEdit(ejercicio_id: number): void {
        if (!this.showEdit || (this.showEdit && ejercicio_id != this.ejercicio_edit_id)) {
            this.showEdit = true;
            this.ejercicio_edit_id = ejercicio_id;
        }
        else {
            this.showEdit = false;
        }
    }
        updateEjercicio(): void {
        this.showEdit = false;
    }
    deleteEjercicio(ejercicioId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete an ejercicio',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this ejercicio from the BookStore?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.ejercicioService.deleteEjercicio(ejercicioId).subscribe(() => {
                            this.toastrService.error("The ejercicio was successfully deleted", "Ejercicio deleted");
                           
                            this.router.navigate(['ejercicios/list']);
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
