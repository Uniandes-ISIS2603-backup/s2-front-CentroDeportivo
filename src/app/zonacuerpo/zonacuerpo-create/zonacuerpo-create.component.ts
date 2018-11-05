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

  constructor(private zonacuerpoService: ZonacuerpoService, private toastrService: ToastrService) { }

    zonacuerpo: Zonacuerpo
    
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
    * Creates  a zonacuerpo
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
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
}
  ngOnInit() {
      this.zonacuerpo = new Zonacuerpo();
  }

}
