import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Objetivo } from '../objetivo';
import {ObjetivoService} from '../objetivo.service';
@Component({
  selector: 'app-objetivo-create',
  templateUrl: './objetivo-create.component.html',
  styleUrls: ['./objetivo-create.component.css']
})
export class ObjetivoCreateComponent implements OnInit {

   /**
    * Constructor del componente 
    */
    constructor(private objetivoService: ObjetivoService, 
    private toastrService: ToastrService) { }

   /**
    * La objetivo nueva
    */
    objetivo : Objetivo
  
   /**
    * El output que dictara el componente padre que el usuario no quiere crear una objetivo
    */
    @Output() cancel = new EventEmitter();
  
   /**
    * El output que dictara el componente padre que el usuario quiere crear una objetivo
    */ 
    @Output() create = new EventEmitter();
   /**
    * Crea una nueva objetivo
    */
    createObjetivo(): Objetivo
    {
        this.objetivo.fechaLimite =this.objetivo.fechaLimite+":00";

        this.objetivoService.createObjetivo(this.objetivo)
            .subscribe((objetivo) => {this.objetivo = objetivo;
            this.create.emit();
                this.toastrService.success("El objetivo fue creado", "Objetivo creation")})
                return this.objetivo;
    }
    
    /**
    * Informa al padre que no se desea crear el objetivo
    */
    cancelCreation() : void {
        this.cancel.emit();
    }
  
    /**
    * Funcion que inicializa el componente
    */
    ngOnInit() {
       this.objetivo = new Objetivo();
    }
}
