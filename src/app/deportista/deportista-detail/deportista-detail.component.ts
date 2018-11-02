import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DeportistaService} from '../deportista.service';
import {DeportistaDetail} from '../deportista-detail';

@Component({
  selector: 'app-deportista-detail',
  templateUrl: './deportista-detail.component.html',
  styleUrls: ['./deportista-detail.component.css']
})
export class DeportistaDetailComponent implements OnInit {

  constructor(private deportistaService: DeportistaService,
               private route: ActivatedRoute) { }

  deportistaDetail: DeportistaDetail;
  
  deportista_id: number;
  
  getDeportistaDetail():void
  {
       this.deportistaService.getDeportistaDetail(this.deportista_id)
            .subscribe(deportistaDetail => {
                this.deportistaDetail = deportistaDetail;
            });
  }
  
  ngOnInit() {
       this.deportista_id = +this.route.snapshot.paramMap.get('id');
  this.deportistaDetail = new DeportistaDetail();
        this.getDeportistaDetail();
  }

}
