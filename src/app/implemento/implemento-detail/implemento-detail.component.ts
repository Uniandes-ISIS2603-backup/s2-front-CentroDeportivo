import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {ImplementoService} from '../implemento.service';
import {ImplementoDetail} from '../implemento-detail';

@Component({
  selector: 'app-implemento-detail',
  templateUrl: './implemento-detail.component.html',
  styleUrls: ['./implemento-detail.component.css']
})
export class ImplementoDetailComponent implements OnInit {

  constructor( private implementoService: ImplementoService,
               private route: ActivatedRoute) { }


 /**
    * The implemento whose details we want to show
    */
    implementoDetail: ImplementoDetail;
  
    implemento_id: number; 


  getImplementoDetail(): void {
         this.implementoService.getImplementoDetail(this.implemento_id)
            .subscribe(implementoDetail => {
                this.implementoDetail = implementoDetail;
            });
    }
  
  ngOnInit() {
    this.implemento_id = +this.route.snapshot.paramMap.get('id');
    this.implementoDetail = new ImplementoDetail();
    this.getImplementoDetail();

  }

}
