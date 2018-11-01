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

  constructor(private ejercicioService: EjercicioService, private toastrService: ToastrService) { }

    ejercicio: Ejercicio
    
    /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new author
    */
    @Output() create = new EventEmitter();

    
    /**
    * Creates  a ejercicio
    */
    createEjercicio(): Ejercicio {
        
    console.log(this.ejercicio)
        this.ejercicioService.createEjercicio(this.ejercicio)
            .subscribe((ejercicio) => {
                this.ejercicio = ejercicio;
                this.create.emit();
                this.toastrService.success("La máquina fue creada", "Ejercicio creation");
                
            });
    return this.ejercicio;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
}
  ngOnInit() {
      this.ejercicio = new Ejercicio();
  }

}
