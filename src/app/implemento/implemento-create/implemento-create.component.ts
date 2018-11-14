import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DatePipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';

import { ImplementoService } from '../implemento.service';

import { Implemento } from '../implemento';

@Component({
    selector: 'app-implemento-create',
    templateUrl: './implemento-create.component.html',
    styleUrls: ['./implemento-create.component.css'],
    providers: [DatePipe]
})
export class ImplementoCreateComponent implements OnInit {

    /**
    * Constructor del componente
    */
    constructor(
        private dp : DatePipe,
        private implementoService: ImplementoService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new implemento
    */
    implemento: Implemento;

    /**
    * El output que dictara el componente padre que usuario no quiere crear implemento
    */
    @Output() cancel = new EventEmitter();

    /**
    * El output que dictara el componente padre que usuario quiere crear implemento
    */
    @Output() create = new EventEmitter();

    /**
    * Crea un nuevo implemento
    */
    createImplemento(): Implemento {
        this.implementoService.createImplemento(this.implemento)
            .subscribe((implemento) => {
                this.implemento = implemento;
                this.create.emit();
                this.toastrService.success("El implemento fue creado", "Implemento creation");                
            });
            return this.implemento;
    }

    /**
    * Informa a padre que no se desea crear el implemento
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * Funcion que inicializa el componente
    */
    ngOnInit() {
        this.implemento = new Implemento();
    }

}