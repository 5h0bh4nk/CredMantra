import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'credMantra';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
      if(this.authService.checkAuthentication()) {
        this.authService.verifyAuthentication().then((response) => {
          if(!response || response.type != 'success'){
            this.authService.logoutUser();
            this.router.navigate(["/home"]);
          }
        });
      }
  }
}
