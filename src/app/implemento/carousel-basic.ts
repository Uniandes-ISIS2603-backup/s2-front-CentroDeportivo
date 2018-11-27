import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
export class NgbdCarouselBasic {
  images = []; 
 
       constructor(config: NgbCarouselConfig, private _http: HttpClient) {
   
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
           this.images.push("https://www.fucol.com.co/wp-content/uploads/2017/12/Mancuernas-cromadas-54lb.jpg");
           this.images.push("https://mlstaticquic-a.akamaihd.net/soporte-regulable-p-barra-ejercicio-sentadillas-pesa-el-rey-D_NQ_NP_738157-MLU25955176024_092017-F.jpg");
           this.images.push("http://www.slinecolombia.com/11274-large_default/bola-yoga-gym-everlast-75-cm-ref-evyb6b175.jpg");
  }
}
