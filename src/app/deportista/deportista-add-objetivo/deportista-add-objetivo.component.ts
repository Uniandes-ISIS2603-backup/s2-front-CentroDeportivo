import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { DeportistaService } from '../deportista.service';
import { Deportista } from '../../deportista/deportista';
import {Objetivo} from '../objetivo';
@Component({
  selector: 'app-deportista-add-objetivo',
  templateUrl: './deportista-add-objetivo.component.html',
  styleUrls: ['./deportista-add-objetivo.component.css']
})
export class DeportistaAddObjetivoComponent implements OnInit, OnChanges {

  constructor(private deportistaService: DeportistaService,
        private toastrService: ToastrService) { }
  @Input() deportista: Deportista;    
  objetivo: Objetivo;
  
  public isCollapsed = true;
  
   @Output() updateObjetivos= new EventEmitter();
   
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
