import { Component, OnInit, Input } from '@angular/core';
import {Objetivo} from '../../objetivo/objetivo';
@Component({
  selector: 'app-deportista-objetivos',
  templateUrl: './deportista-objetivos.component.html',
  styleUrls: ['./deportista-objetivos.component.css']
})
export class DeportistaObjetivosComponent implements OnInit {
    
 @Input() deportistaObjetivos : Objetivo [];
 
  public isCollapsed = false;
  
   updateObjetivos(objetivos:Objetivo[]): void {
        this.deportistaObjetivos = objetivos;
    }
  constructor() { }

  ngOnInit() {
  }

}
