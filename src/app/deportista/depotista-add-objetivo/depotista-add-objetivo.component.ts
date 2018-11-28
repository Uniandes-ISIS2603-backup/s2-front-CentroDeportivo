import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Objetivo } from '../objetivo';
import { DeportistaService } from '../deportista.service';
import { Deportista } from '../../deportista/deportista';

@Component({
  selector: 'app-depotista-add-objetivo',
  templateUrl: './depotista-add-objetivo.component.html',
  styleUrls: ['./depotista-add-objetivo.component.css']
})
export class DepotistaAddObjetivoComponent implements OnInit {
    
descripcion: string;

  constructor(private deportistaService: DeportistaService,
        private toastrService: ToastrService) { }
@Input() deportista: Deportista;
objetivo: Objetivo;
    
public isCollapsed = true;
@Output() updateObjetivos = new EventEmitter();
postObjetivo(objetivoForm: NgForm): Objetivo {
        this.objetivo.deportista = this.deportista;
        this.deportistaService.createObjetivo(this.deportista.id,this.objetivo)
            .subscribe(() => {
                objetivoForm.resetForm();
                this.updateObjetivos.emit();
                this.toastrService.success("The objetivo was successfully created", 'Objetivo added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.objetivo;
    }
  ngOnInit() {
      this.objetivo = new Objetivo();
  }
 ngOnChanges() {
        this.ngOnInit();
    }
}
