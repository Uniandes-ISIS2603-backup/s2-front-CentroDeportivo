import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { EjercicioService } from '../ejercicio.service';
import { Ejercicio } from '../../ejercicio/ejercicio';
import {Zonacuerpo} from '../zonacuerpo';
@Component({
  selector: 'app-ejercicio-add-zonacuerpo',
  templateUrl: './ejercicio-add-zonacuerpos.component.html',
  styleUrls: ['./ejercicio-add-zonacuerpos.component.css']
})
export class EjercicioAddZonacuerposComponent implements OnInit, OnChanges {

  constructor(private ejercicioService: EjercicioService,
        private toastrService: ToastrService) { }
  @Input() ejercicio: Ejercicio;    
  zonacuerpo: Zonacuerpo;
  
  public isCollapsed = true;
  
   @Output() updateZonacuerpos= new EventEmitter();
   
   postZonacuerpo(zonacuerpoForm: NgForm): Zonacuerpo {
        this.zonacuerpo.ejercicio = this.ejercicio;
        this.ejercicioService.createZonacuerpo(this.ejercicio.id,this.zonacuerpo)
            .subscribe(() => {
                zonacuerpoForm.resetForm();
                this.updateZonacuerpos.emit();
                this.toastrService.success("The zonacuerpo was successfully created", 'Zonacuerpo added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.zonacuerpo;
    }
  ngOnInit() {
        this.zonacuerpo = new Zonacuerpo();
  }
    ngOnChanges() {
        this.ngOnInit();
    }
}

