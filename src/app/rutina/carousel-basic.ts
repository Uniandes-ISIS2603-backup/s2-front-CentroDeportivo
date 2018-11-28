import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
export class NgbdCarouselBasic {
  images = []; 
 
       constructor(config: NgbCarouselConfig, private _http: HttpClient) {
   
      config.showNavigationArrows = true;
      
      config.showNavigationIndicators = true;
           
           this.images.push("https://eresdeportista.com/wp-content/uploads/2018/08/rutina-de-ejercicios-para-gluteos-en-casa.jpg");
           this.images.push("https://www.gym-in.com/wp-content/uploads/2016/04/2016_04_28-Rutina-contra-la-celulitis.png");
           this.images.push("https://tumejorfisico.com/wp-content/uploads/2018/04/rutina-mujeres.jpg");
  }
}
