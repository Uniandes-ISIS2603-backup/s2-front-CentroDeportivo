import { Component, OnInit, Input } from '@angular/core';
import {Zonacuerpo} from '../../zonacuerpo/zonacuerpo';
@Component({
  selector: 'app-ejercicio-zonacuerpos',
  templateUrl: './ejercicio-zonacuerpos.component.html',
  styleUrls: ['./ejercicio-zonacuerpos.component.css']
})
export class EjercicioZonacuerposComponent implements OnInit {
    
 @Input() ejercicioZonacuerpos : Zonacuerpo [];
 
  public isCollapsed = false;
  
   updateZonacuerpos(zonacuerpos:Zonacuerpo[]): void {
        this.ejercicioZonacuerpos = zonacuerpos;
    }
  constructor() { }

  ngOnInit() {
  }

}
