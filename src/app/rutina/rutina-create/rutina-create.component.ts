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
    * Constructor for the component
    * @param rutinaService The rutinas' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private rutinaService: RutinaService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new rutina
    */
    rutina: Rutina;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an rutina
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new rutina
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new rutina
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
    * Informs the parent component that the user no longer wants to create an rutina
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.rutina = new Rutina();
    }
}
