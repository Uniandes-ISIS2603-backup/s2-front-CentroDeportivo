import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { RutinaService } from '../rutina.service';

import { Rutina } from '../rutina';

@Component({
    selector: 'app-rutina-create',
    templateUrl: './rutina-create.component.html',
    styleUrls: ['./rutina-create.component.css']
})
export class RutinaCreateComponent implements OnInit {

    /**
    * Constructor del componente
    */
    constructor(
        private rutinaService: RutinaService,
        private toastrService: ToastrService
    ) { }

    /**
    * La nueva rutina
    */
    rutina: Rutina;

    /**
    * El output que dictara el componente padre que usuario no quiere crear rutina
    * 
    */
    @Output() cancel = new EventEmitter();

    /**
    * El output que dictara el componente padre que usuario quiere crear rutina
    */
    @Output() create = new EventEmitter();

    /**
    * Crea una nueva rutina
    */
    createRutina(): void {
        this.rutinaService.createRutina(this.rutina)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The rutina was created", "Rutina creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    /**
    * Informa a padre que no se desea crear la rutina
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * Funcion que inicializa el componente
    */
    ngOnInit() {
        this.rutina = new Rutina();
    }
}
