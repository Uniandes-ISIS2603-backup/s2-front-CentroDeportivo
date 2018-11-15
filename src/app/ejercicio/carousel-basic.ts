import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
export class NgbdCarouselBasic {
  images = []; 
 
       constructor(config: NgbCarouselConfig, private _http: HttpClient) {
   
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
           this.images.push("https://tumejorfisico.com/wp-content/uploads/2015/07/peso-muerto-rumano-1024x886.jpg");
           this.images.push("http://1.bp.blogspot.com/_5YH9MpGHcuQ/SxErIsyPB_I/AAAAAAAACp0/Q5F9smcBbFI/s1600/curlalterno_579.jpg");
           this.images.push("http://tabladeejercicios.com/wp-content/uploads/2017/11/press-banca2.jpg");
  }
}
