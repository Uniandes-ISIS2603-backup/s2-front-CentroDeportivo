import { Component, OnInit } from '@angular/core';
import { Deportista } from '../deportista';
import { DeportistaService } from '../deportista.service';

@Component({
  selector: 'app-deportista-list',
  templateUrl: './deportista-list.component.html',
  styleUrls: ['./deportista-list.component.css']
})
export class DeportistaListComponent implements OnInit {

  constructor(private deportistaService:DeportistaService) { }

 deportistas : Deportista[];
 
 getDeportistas(): void{
     this.deportistaService.getDeportistas().subscribe(deportistas => this.deportistas = deportistas);
 }
  ngOnInit() {
      this.getDeportistas();
  }
}
