import { Component, OnInit } from '@angular/core';
import { Implemento } from '../implemento';
import { ImplementoService } from '../implemento.service';

/**
 * The component for the list of implementos in the Centro Deportivo
 */
@Component({
    selector: 'list-implemento',
    templateUrl: './implemento-list.component.html', 
})
export class ImplementoListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param implementoService The author's services provider
     */
    constructor(private implementoService: ImplementoService) { }
    
    /**
     * The list of implementos which belong to the Centro Deportivo
     */
    implementos: Implemento[];

    /**
     * Asks the service to update the list of implementos
     */
    getImplementos(): void {
        this.implementoService.getImplementos().subscribe(implementos => this.implementos = implementos);
    }

    /**
     * This will initialize the component by retrieving the list of implementos from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getImplementos();
    }
}