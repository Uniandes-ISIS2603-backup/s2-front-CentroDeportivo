import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { EspecialistaService } from '../especialista.service';

import { Especialista } from '../especialista';

@Component({
    selector: 'app-especialista-create',
    templateUrl: './especialista-create.component.html',
    styleUrls: ['./especialista-create.component.css']
})
export class EspecialistaCreateComponent implements OnInit {

    /**
    * Constructor del componente
    */
    constructor(
        private especialistaService: EspecialistaService,
        private toastrService: ToastrService
    ) { }

    /**
    * El nuevo especialista
    */
    especialista: Especialista;

    /**
    * El output que dictara el componente padre que usuario no quiere crear especialista
    * 
    */
    @Output() cancel = new EventEmitter();

    /**
    * El output que dictara el componente padre que usuario quiere crear especialista
    */
    @Output() create = new EventEmitter();

    /**
    * Crea un nuevo especialista
    */
    createEspecialista(): void {
        this.especialistaService.createEspecialista(this.especialista)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The especialista was created", "Especialista creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    /**
    * Informa a padre que no se desea crear el especialista
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * Funcion que inicializa el componente
    */
    ngOnInit() {
        this.especialista = new Especialista();
    }
}
