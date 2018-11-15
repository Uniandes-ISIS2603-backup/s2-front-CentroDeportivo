import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
export class NgbdCarouselBasic {
  images = []; 
 
       constructor(config: NgbCarouselConfig, private _http: HttpClient) {
   
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
           this.images.push("https://guiafitness.com/wp-content/uploads/7-beneficios-del-peso-muerto-que-no-conocias.jpg");
           this.images.push("https://tumejorfisico.com/wp-content/uploads/2016/02/Curl-b%C3%ADceps-inclinado-con-mancuerna.jpg");
           this.images.push("https://www.menshealth.es/media/cache/big/upload/images/article/4683/article-press-banca-tomatelo-pecho-586cdab3474cf.jpg");
  }
}
