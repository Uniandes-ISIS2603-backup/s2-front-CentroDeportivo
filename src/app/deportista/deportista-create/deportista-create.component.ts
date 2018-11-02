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

  constructor(private deportistaService: DeportistaService, private toastrService: ToastrService) { }

  deportista : Deportista
  
  @Output() cancel = new EventEmitter();
  
  @Output() create = new EventEmitter();
  
  createDeportista(): Deportista
  {
      console.log(this.deportista)
      this.deportistaService.createDeportista(this.deportista)
          .subscribe((deportista) => {this.deportista = deportista;
          this.create.emit();
              this.toastrService.success("El deportista fue creado", "Deportista creation")})
              return this.deportista;
  }
  
  cancelCreation() : void {
      this.cancel.emit();
  }
  ngOnInit() {
      this.deportista = new Deportista();
  }

}
