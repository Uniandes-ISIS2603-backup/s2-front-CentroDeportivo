import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
export class NgbdCarouselBasic {
  images = []; 
 
       constructor(config: NgbCarouselConfig, private _http: HttpClient) {
   
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
           this.images.push("https://bodytech.com.co/uploads/complementaryservice/72a941c8e0574edfa2d77a182c1b5961/bodytech_zona_cardiovascular.jpg");
           this.images.push("https://bodytech.com.co/uploads/complementaryservice/59931bdc633c4e36b5f815e4b2e490c2/bodytech_abdomen_estiramiento1920x622.jpg");
           this.images.push("https://bodytech.com.co/uploads/complementaryservice/da5773daf4e246b783922d904ac78bd1/bodytech_zona_musculacion.jpg");
  }
}
