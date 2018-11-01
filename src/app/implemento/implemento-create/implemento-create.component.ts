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
    * Constructor for the component
    * @param implementoService The implemento's services provider
    * @param toastrService The toastr to show messages to the user
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
    * The output which tells the parent component
    * that the user no longer wants to create an implemento
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new implemento
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an implemento
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
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.implemento = new Implemento();
    }

}