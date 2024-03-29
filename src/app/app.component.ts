import { Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: string;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "Ludis";
        this.authService.start();
    }

    /**
     * @ignore
     */
   constructor(private authService: AuthService) { }

    logout(): void {
        this.authService.logout()
    }

   

}
