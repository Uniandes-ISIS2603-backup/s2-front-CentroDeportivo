import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({selector: 'ngbd-carousel-basic2', templateUrl: './carousel-basic2.html'})
export class NgbdCarouselBasic {
  images = []; 
 
       constructor(config: NgbCarouselConfig, private _http: HttpClient) {
   
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
           this.images.push("https://nydnrehab.com/wp-content/uploads/2016/10/Pectoralis-Major-Trigger-Points-The-Cardiac-Copycats.jpg");
           this.images.push("https://hablandofitness.com/wp-content/uploads/vasto-interno-cuadriceps-1.jpg");
           this.images.push("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Triceps_brachii.png/250px-Triceps_brachii.png");
  }
}
