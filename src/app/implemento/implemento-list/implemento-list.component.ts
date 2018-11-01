import { Component, OnInit } from '@angular/core';
import { Implemento } from '../implemento';
import { ImplementoService } from '../implemento.service';
import {ImplementoDetail} from '../implemento-detail';;

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
     * @param implementoService The implemento's services provider
     */
    constructor(private implementoService: ImplementoService) { }
    
    /**
     * The list of implementos which belong to the Centro Deportivo
     */
    implementos: Implemento[];
    implemento_id: number;
    selectedImplemento: Implemento;
    showCreate: boolean;

    onSelected(implemento_id: number):void {
        this.showCreate = false;
        this.implemento_id = implemento_id;
        this.selectedImplemento = new ImplementoDetail();
        this.getImplementoDetail();     
    }
    
    showHideCreate(): void {
     if (this.selectedImplemento) {
               this.selectedImplemento = undefined;
               this.implemento_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }

    /**
     * Asks the service to update the list of implementos
     */
    getImplementos(): void {
        this.implementoService.getImplementos().subscribe(implementos => this.implementos = implementos);
    }

    getImplementoDetail(): void {
        this.implementoService.getImplementoDetail(this.implemento_id)
            .subscribe(selectedImplemento => {
                this.selectedImplemento = selectedImplemento
            });
     }

    /**
     * This will initialize the component by retrieving the list of implementos from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.showCreate = false;
        this.selectedImplemento = undefined;
        this.implemento_id = undefined;
        this.getImplementos();
    }
}