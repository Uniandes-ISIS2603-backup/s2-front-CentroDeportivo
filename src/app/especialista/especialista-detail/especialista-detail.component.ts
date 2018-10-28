import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {EspecialistaService} from '../especialista.service';
import {EspecialistaDetail} from '../especialista-detail';

@Component({
  selector: 'app-especialista-detail',
  templateUrl: './especialista-detail.component.html',
  styleUrls: ['./especialista-detail.component.css']
})
export class EspecialistaDetailComponent implements OnInit {

  constructor( private especialistaService: EspecialistaService,
               private route: ActivatedRoute) { }


 /**
    * The editorial whose details we want to show
    */
    especialistaDetail: EspecialistaDetail;
  
    especialista_id: number; 


  getEspecialistaDetail(): void {
         this.especialistaService.getEspecialistaDetail(this.especialista_id)
            .subscribe(especialistaDetail => {
                this.especialistaDetail = especialistaDetail;
            });
    }
  
  ngOnInit() {
  this.especialista_id = +this.route.snapshot.paramMap.get('id');
  this.especialistaDetail = new EspecialistaDetail();
        this.getEspecialistaDetail();

  }

}
