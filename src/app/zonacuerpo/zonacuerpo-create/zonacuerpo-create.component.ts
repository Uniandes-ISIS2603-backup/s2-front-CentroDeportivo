import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Zonacuerpo } from '../zonacuerpo';
import {ZonacuerpoService} from '../zonacuerpo.service';

@Component({
  selector: 'app-zonacuerpo-create',
  templateUrl: './zonacuerpo-create.component.html',
  styleUrls: ['./zonacuerpo-create.component.css']
})
export class ZonacuerpoCreateComponent implements OnInit {

    /**
    * Constructor del componente 
    */
    constructor(private zonacuerpoService: ZonacuerpoService, private toastrService: ToastrService) { }

    /**
     * La zona del cuerpo nueva
     */
    zonacuerpo: Zonacuerpo
    
    /**
    * El output que dictara el componente padre que el usuario no quiere crear una zonacuerpo
    */
    @Output() cancel = new EventEmitter();

    /**
    * El output que dictara el componente padre que el usuario quiere crear una zonacuerpo
    */
    @Output() create = new EventEmitter();

    
    /**
    * crea una zonacuerpo
    */
    createZonacuerpo(): Zonacuerpo {
        
    console.log(this.zonacuerpo)
        this.zonacuerpoService.createZonacuerpo(this.zonacuerpo)
            .subscribe((zonacuerpo) => {
                this.zonacuerpo = zonacuerpo;
                this.create.emit();
                this.toastrService.success("El zonacuerpo fue creado", "Zonacuerpo creation");
                
            });
    return this.zonacuerpo;
    }

    /**
    * Informa al padre que no se desea crear la zonacuerpo
    */
    cancelCreation(): void {
        this.cancel.emit();
}
  
    /**
    * Funcion que inicializa el componente
    */
    ngOnInit() {
      this.zonacuerpo = new Zonacuerpo();
  }

}
