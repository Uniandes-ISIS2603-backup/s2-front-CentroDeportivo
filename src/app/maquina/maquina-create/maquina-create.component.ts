import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Maquina } from '../maquina';
import {MaquinaService} from '../maquina.service';

@Component({
  selector: 'app-maquina-create',
  templateUrl: './maquina-create.component.html',
  styleUrls: ['./maquina-create.component.css']
})
export class MaquinaCreateComponent implements OnInit {

    /**
    * Constructor del componente 
    */
    constructor(private maquinaService: MaquinaService, private toastrService: ToastrService) { }

    /**
     * La maquina nueva
     */
    maquina: Maquina
    
    /**
    * El output que dictara el componente padre que el usuario no quiere crear una maquina
    */
    @Output() cancel = new EventEmitter();

    /**
    * El output que dictara el componente padre que el usuario quiere crear una maquina
    */
    @Output() create = new EventEmitter();

    
    /**
    * Crea una nueva maquina
    */
    createMaquina(): Maquina {
        
    console.log(this.maquina)
        this.maquinaService.createMaquina(this.maquina)
            .subscribe((maquina) => {
                this.maquina = maquina;
                this.create.emit();
                this.toastrService.success("La máquina fue creada", "Maquina creation");
                
            });
    return this.maquina;
    }

    /**
    * Informa al padre que no se desea crear la maquina
    */
    cancelCreation(): void {
        this.cancel.emit();
}
    /**
    * Funcion que inicializa el componente
    */
      ngOnInit() {
      this.maquina = new Maquina();
  }

}
