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

  constructor(private maquinaService: MaquinaService, private toastrService: ToastrService) { }

    maquina: Maquina
    
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
    * Creates  a maquina
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
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
}
  ngOnInit() {
      this.maquina = new Maquina();
  }

}
