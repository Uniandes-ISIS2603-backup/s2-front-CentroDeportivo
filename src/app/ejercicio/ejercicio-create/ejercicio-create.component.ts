import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Ejercicio } from '../ejercicio';
import {EjercicioService} from '../ejercicio.service';

@Component({
  selector: 'app-ejercicio-create',
  templateUrl: './ejercicio-create.component.html',
  styleUrls: ['./ejercicio-create.component.css']
})
export class EjercicioCreateComponent implements OnInit {

   /**
    * Constructor del componente
    */
  constructor(private ejercicioService: EjercicioService, private toastrService: ToastrService) { }

    ejercicio: Ejercicio
    
    /**
    * El output que dictara el componente padre que usuario no quiere crear ejercicio
    */
    @Output() cancel = new EventEmitter();

    /**
    * El output que dictara el componente padre que usuario quiere crear ejercicio
    */
    @Output() create = new EventEmitter();

    
    /**
    * Crea un nuevo ejercicio
    */
    createEjercicio(): Ejercicio {
        
    console.log(this.ejercicio)
        this.ejercicioService.createEjercicio(this.ejercicio)
            .subscribe((ejercicio) => {
                this.ejercicio = ejercicio;
                this.create.emit();
                this.toastrService.success("El ejercicio fue creado", "Ejercicio creation");
                
            });
    return this.ejercicio;
    }

    /**
    * Informa a padre que no se desea crear el ejercicio
    */
    cancelCreation(): void {
        this.cancel.emit();
}
/**
    * Funcion que inicializa el componente
    */
  ngOnInit() {
      this.ejercicio = new Ejercicio();
  }

}
