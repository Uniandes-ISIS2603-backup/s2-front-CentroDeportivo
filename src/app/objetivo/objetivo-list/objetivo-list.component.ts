import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../objetivo';
import { ObjetivoService } from '../objetivo.service';

@Component({
  selector: 'app-objetivo-list',
  templateUrl: './objetivo-list.component.html',
  styleUrls: ['./objetivo-list.component.css']
})
export class ObjetivoListComponent implements OnInit {
  objetivos: Objetivo[];
  
  constructor(private objetivoService:ObjetivoService) { }

  getObjetivos(): void
  {
      this.objetivoService.getObjetivos().subscribe(objetivos => this.objetivos = objetivos);
  }
  ngOnInit() {
      this.getObjetivos();
  }

}
