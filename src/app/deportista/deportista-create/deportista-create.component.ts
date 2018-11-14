import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Deportista } from '../deportista';
import {DeportistaService} from '../deportista.service';

@Component({
  selector: 'app-deportista-create',
  templateUrl: './deportista-create.component.html',
  styleUrls: ['./deportista-create.component.css']
})
export class DeportistaCreateComponent implements OnInit {

    /**
    * Constructor del componente
    */
  constructor(private deportistaService: DeportistaService, private toastrService: ToastrService) { }

  deportista : Deportista
  
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
  createDeportista(): Deportista
  {
      console.log(this.deportista)
      this.deportistaService.createDeportista(this.deportista)
          .subscribe((deportista) => {this.deportista = deportista;
          this.create.emit();
              this.toastrService.success("El deportista fue creado", "Deportista creation")})
              return this.deportista;
  }
  /**
    * Informa a padre que no se desea crear el ejercicio
    */
  cancelCreation() : void {
      this.cancel.emit();
  }
  /**
    * Funcion que inicializa el componente
    */
  ngOnInit() {
      this.deportista = new Deportista();
  }

}
