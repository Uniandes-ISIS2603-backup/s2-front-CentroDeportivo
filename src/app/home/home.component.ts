import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //imagenes del carousel  
  images = ["https://bodytech.com.co/uploads/complementaryservice/72a941c8e0574edfa2d77a182c1b5961/bodytech_zona_cardiovascular.jpg", "../../assets/imagen.jpeg", "https://www.sunset247.co.uk/wp-content/uploads/2017/11/sunset_bg.jpg"];
  constructor(
    private router: Router,
  
  ) {}

  isAuthenticated: boolean;
 
  tags: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {
    
  }
}
