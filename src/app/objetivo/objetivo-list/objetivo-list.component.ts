import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../objetivo';
import { ObjetivoService } from '../objetivo.service';
import {ObjetivoDetail} from '../objetivo-detail';

@Component({
  selector: 'app-objetivo-list',
  templateUrl: './objetivo-list.component.html',
  styleUrls: ['./objetivo-list.component.css']
})
export class ObjetivoListComponent implements OnInit {
  objetivos: Objetivo[];
  objetivo_id: number;
  selectedObjetivo : Objetivo;
  showCreate: boolean;
   
  constructor(private objetivoService:ObjetivoService) { }

  getObjetivos(): void
  {
      this.objetivoService.getObjetivos().subscribe(objetivos => this.objetivos = objetivos);
  }
  onSelected(objetivo_id: number):void {
    this.showCreate = false;
    this.objetivo_id = objetivo_id;
    this.selectedObjetivo = new ObjetivoDetail();
    this.getObjetivoDetail();
}  
showHideCreate(): void {
     if (this.selectedObjetivo) {
               this.selectedObjetivo = undefined;
               this.objetivo_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    getObjetivoDetail(): void {
         this.objetivoService.getObjetivoDetail(this.objetivo_id)
            .subscribe(selectedObjetivo => {
                this.selectedObjetivo = selectedObjetivo
            });
    }
  ngOnInit() {
      this.showCreate = false;
      this.selectedObjetivo = undefined;
      this.objetivo_id = undefined;
      this.getObjetivos();
  }

}
