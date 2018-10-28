import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {RutinaService} from '../rutina.service';
import {RutinaDetail} from '../rutina-detail';

@Component({
  selector: 'app-rutina-detail',
  templateUrl: './rutina-detail.component.html',
  styleUrls: ['./rutina-detail.component.css']
})
export class RutinaDetailComponent implements OnInit {

  constructor( private rutinaService: RutinaService,
               private route: ActivatedRoute) { }


 /**
    * The editorial whose details we want to show
    */
    rutinaDetail: RutinaDetail;
  
    rutina_id: number; 


  getRutinaDetail(): void {
         this.rutinaService.getRutinaDetail(this.rutina_id)
            .subscribe(rutinaDetail => {
                this.rutinaDetail = rutinaDetail;
            });
    }
  
  ngOnInit() {
  this.rutina_id = +this.route.snapshot.paramMap.get('id');
  this.rutinaDetail = new RutinaDetail();
        this.getRutinaDetail();

  }

}
