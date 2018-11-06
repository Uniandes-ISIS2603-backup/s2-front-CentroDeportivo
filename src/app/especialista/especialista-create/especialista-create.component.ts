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
    * Constructor for the component
    * @param especialistaService The especialistas' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private especialistaService: EspecialistaService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new especialista
    */
    especialista: Especialista;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an especialista
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new especialista
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new especialista
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
    * Informs the parent component that the user no longer wants to create an especialista
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.especialista = new Especialista();
    }
}
