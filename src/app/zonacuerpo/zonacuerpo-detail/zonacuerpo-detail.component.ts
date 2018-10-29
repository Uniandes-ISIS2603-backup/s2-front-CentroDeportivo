import { Component, OnInit } from '@angular/core'

import { ActivatedRoute } from '@angular/router';

import {ZonacuerpoService} from '../zonacuerpo.service';
import {ZonacuerpoDetail} from '../zonacuerpo-detail';


@Component({
  selector: 'app-zonacuerpo-detail',
  templateUrl: './zonacuerpo-detail.component.html',
  styleUrls: ['./zonacuerpo-detail.component.css']
})
export class ZonacuerpoDetailComponent implements OnInit {

  constructor( private zonacuerpoService: ZonacuerpoService,
               private route: ActivatedRoute) { }


 /**
    * The editorial whose details we want to show
    */
    zonacuerpoDetail: ZonacuerpoDetail;
  
    zonacuerpo_id: number; 


  getZonacuerpoDetail(): void {
         this.zonacuerpoService.getZonacuerpoDetail(this.zonacuerpo_id)
            .subscribe(zonacuerpoDetail => {
                this.zonacuerpoDetail = zonacuerpoDetail;
            });
    }
  
  ngOnInit() {
  this.zonacuerpo_id = +this.route.snapshot.paramMap.get('id');
  this.zonacuerpoDetail = new ZonacuerpoDetail();
        this.getZonacuerpoDetail();

  }
}
