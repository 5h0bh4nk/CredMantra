import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {
  }

  redirectTomicroLoan() {
    this.router.navigate(["/short-term-loan"]);
  }

  redirectToPersonalLoan() {
    this.router.navigate(["/personal-loan"]);
  }

  redirectToPayLater() {
    this.router.navigate(["/pay-later"]);
  }

  redirectToCreditCard() {
    this.router.navigate(["/credit-card"]);
  }
  
}
