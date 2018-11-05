import { Component, OnInit } from '@angular/core';
import { Zonacuerpo } from '../zonacuerpo';
import { ZonacuerpoService } from '../zonacuerpo.service';

import {ZonacuerpoDetail} from '../zonacuerpo-detail';
/**
 * The component for the list of zonacuerpos in the BookStore
 */
@Component({
    selector: 'app-zonacuerpo-list',
    templateUrl: './zonacuerpo-list.component.html', 
    styleUrls: ['./zonacuerpo-list.component.css']
})
export class ZonacuerpoListComponent implements OnInit {

   /**
     * Constructor for the component
     * @param zonacuerpoService The author's services provider
     */
    constructor( private zonacuerpoService: ZonacuerpoService) { }
    
    /**
     * The list of zonacuerpos which belong to the BookStore
     */
    zonacuerpos: Zonacuerpo[];
    zonacuerpo_id: number;
   selectedZonacuerpo : Zonacuerpo;
   showCreate: boolean;

//    /**
//     * Asks the service to update the list of zonacuerpos
//     */
   

onSelected(zonacuerpo_id: number):void {
        this.showCreate = false;
        this.zonacuerpo_id = zonacuerpo_id;
    this.selectedZonacuerpo = new ZonacuerpoDetail();
    this.getZonacuerpoDetail();
}   
   
showHideCreate(): void {
     if (this.selectedZonacuerpo) {
               this.selectedZonacuerpo = undefined;
               this.zonacuerpo_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    getZonacuerpos(): void {
        this.zonacuerpoService.getZonacuerpos().subscribe(zonacuerpos => this.zonacuerpos = zonacuerpos);
    }
    
     getZonacuerpoDetail(): void {
         this.zonacuerpoService.getZonacuerpoDetail(this.zonacuerpo_id)
            .subscribe(selectedZonacuerpo => {
                this.selectedZonacuerpo = selectedZonacuerpo
            });
    }
   
  ngOnInit() {
      this.showCreate = false;
      this.selectedZonacuerpo = undefined;
      this.zonacuerpo_id = undefined;
      this.getZonacuerpos();
  }
}