import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MaquinaService} from '../maquina.service';
import {MaquinaDetail} from '../maquina-detail';

@Component({
  selector: 'app-maquina-detail',
  templateUrl: './maquina-detail.component.html',
  styleUrls: ['./maquina-detail.component.css']
})
export class MaquinaDetailComponent implements OnInit {

  constructor( private maquinaService: MaquinaService,
               private route: ActivatedRoute) { }


 /**
    * The editorial whose details we want to show
    */
    maquinaDetail: MaquinaDetail;
  
    maquina_id: number; 


  getMaquinaDetail(): void {
         this.maquinaService.getMaquinaDetail(this.maquina_id)
            .subscribe(maquinaDetail => {
                this.maquinaDetail = maquinaDetail;
            });
    }
  
  ngOnInit() {
  this.maquina_id = +this.route.snapshot.paramMap.get('id');
  this.maquinaDetail = new MaquinaDetail();
        this.getMaquinaDetail();

  }

}
