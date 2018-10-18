import { Component, OnInit } from '@angular/core';
import { Zonacuerpo } from '../zonacuerpo';
import { ZonacuerpoService } from '../zonacuerpo.service';

/**
 * The component for the list of zonacuerpos in the BookStore
 */
@Component({
    selector: 'app-zonacuerpo-list',
    templateUrl: './zonacuerpo-list.component.html', 
})
export class ZonacuerpoListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param zonacuerpoService The author's services provider
     */
    constructor(
//    private zonacuerpoService: ZonacuerpoService
    ) { }
    
    /**
     * The list of zonacuerpos which belong to the BookStore
     */
    zonacuerpos: Zonacuerpo[];

    /**
     * Asks the service to update the list of zonacuerpos
     */
//    getZonacuerpos(): void {
////        this.zonacuerpoService.getZonacuerpos().subscribe(zonacuerpos => this.zonacuerpos = zonacuerpos);
//    }

    /**
     * This will initialize the component by retrieving the list of zonacuerpos from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
//        this.getZonacuerpos();
    }
}