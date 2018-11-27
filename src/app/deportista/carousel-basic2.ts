import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({selector: 'ngbd-carousel-basic2', templateUrl: './carousel-basic2.html'})
export class NgbdCarouselBasic {
  images = []; 
 
       constructor(config: NgbCarouselConfig, private _http: HttpClient) {
   
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
           this.images.push("http://3ositos.com/imagenes/08594361.jpg");
           this.images.push("https://www.superprof.es/imagenes/anuncios/profesor-home-entrenador-personal-deportista-crecimiento-nutricion-acesoramiento.jpg");
           this.images.push("https://www.merca2.es/wp-content/uploads/2018/08/Artiem-y-el-deportista-Sergio-Turull-unidos-por-la-fibromialgia.png");
  }
}
