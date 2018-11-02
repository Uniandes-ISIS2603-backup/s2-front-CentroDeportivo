import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ObjetivoService} from '../objetivo.service';
import {ObjetivoDetail} from '../objetivo-detail';

@Component({
  selector: 'app-objetivo-detail',
  templateUrl: './objetivo-detail.component.html',
  styleUrls: ['./objetivo-detail.component.css']
})
export class ObjetivoDetailComponent implements OnInit {

  constructor(private objetivoService: ObjetivoService,
               private route: ActivatedRoute) { }
    objetivoDetail: ObjetivoDetail;
  
    objetivo_id: number; 
    
    getObjetivoDetail(): void {
         this.objetivoService.getObjetivoDetail(this.objetivo_id)
            .subscribe(objetivoDetail => {
                this.objetivoDetail = objetivoDetail;
            });
    }
  ngOnInit() {
      this.objetivo_id = +this.route.snapshot.paramMap.get('id');
  this.objetivoDetail = new ObjetivoDetail();
        this.getObjetivoDetail();
  }

}
