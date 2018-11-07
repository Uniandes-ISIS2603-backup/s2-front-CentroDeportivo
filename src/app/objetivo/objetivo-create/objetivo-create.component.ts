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

  constructor(private objetivoService: ObjetivoService, private toastrService: ToastrService) { }

  objetivo : Objetivo
  
  @Output() cancel = new EventEmitter();
  
  @Output() create = new EventEmitter();
  
  createObjetivo(): Objetivo
  {
      this.objetivo.fechaLimite =this.objetivo.fechaLimite+":00";
      
      this.objetivoService.createObjetivo(this.objetivo)
          .subscribe((objetivo) => {this.objetivo = objetivo;
          this.create.emit();
              this.toastrService.success("El objetivo fue creado", "Objetivo creation")})
              return this.objetivo;
  }
  
  cancelCreation() : void {
      this.cancel.emit();
  }
  ngOnInit() {
      this.objetivo = new Objetivo();
  }
}
