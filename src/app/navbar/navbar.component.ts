import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn: boolean = false;
  public isCollapsed = false;

  constructor(private authService: AuthService){};
  ngOnInit() {
    this.isLoggedIn = this.authService.checkAuthentication();
  }

  logout() {
    this.authService.logoutUser();
  }
  
}
