import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
export class NgbdCarouselBasic {
  images = []; 
 
       constructor(config: NgbCarouselConfig, private _http: HttpClient) {
   
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
           this.images.push("http://4.bp.blogspot.com/-v0nhqlRgmNw/UFDJYPfKL7I/AAAAAAAAAPQ/PJhpG8w1hRg/s1600/eps+grupo+para+collage+chica.jpg");
           this.images.push("https://api.motorpress-iberica.es/trainings/api/v1/images/workout/54f97175e13aa6163e84ff13.jpg");
           this.images.push("https://do1pouckcwxot.cloudfront.net/argentina/uploads/2017/04/07190633/entrenamientos-fuerza.jpg");
  }
}
