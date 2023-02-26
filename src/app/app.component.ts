import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
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
  user: SocialUser|null = null;

  constructor(private authService: AuthService, private socialAuth: SocialAuthService, private router: Router) {
  }

  ngOnInit(): void {
      if(this.authService.checkAuthentication()) {
        if(!this.authService.checkGoogleAuthentication()) {
          // for profile page
        }
        else this.authService.verifyAuthentication().then((response) => {
          if(!response || response.type != 'success'){
            this.authService.logoutUser();
            this.router.navigate(["/home"]);
          }
        });
      }
  }
}
