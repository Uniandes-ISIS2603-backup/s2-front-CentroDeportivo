import { Component, OnInit } from '@angular/core';
import { Deportista } from '../deportista';
import { DeportistaService } from '../deportista.service';
import {DeportistaDetail} from '../deportista-detail';

@Component({
  selector: 'app-deportista-list',
  templateUrl: './deportista-list.component.html',
  styleUrls: ['./deportista-list.component.css']
})
export class DeportistaListComponent implements OnInit {

  constructor(private deportistaService:DeportistaService) { }

 deportistas : Deportista[];
 selectedDeportista : Deportista;
 deportista_id: number;
 showCreate: boolean;
   
onSelected(deportista_id: number):void {
        this.showCreate = false;
        this.deportista_id = deportista_id;
    this.selectedDeportista = new DeportistaDetail();
    this.getDeportistaDetail();
}   
   
showHideCreate(): void {
     if (this.selectedDeportista) {
               this.selectedDeportista = undefined;
               this.deportista_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    getDeportistaDetail(): void {
         this.deportistaService.getDeportistaDetail(this.deportista_id)
            .subscribe(selectedDeportista => {
                this.selectedDeportista = selectedDeportista
            });
    }
 getDeportistas(): void{
     this.deportistaService.getDeportistas().subscribe(deportistas => this.deportistas = deportistas);
 }
  ngOnInit() {
      this.showCreate = false;
      this.selectedDeportista = undefined;
      this.deportista_id = undefined;
      this.getDeportistas();
  }
}
