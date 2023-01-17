import { Component, Input } from '@angular/core';

export interface category {
  id: Number;
  name: String;
  component: String;
}

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.css']
})

export class CompaniesPageComponent {
  @Input() active! : String;
  heading = "RBI Approved Companies";
  categories: category[] = [
    {id: 1, name: "Personal Loan", component: "personal-loan"},
    {id: 2, name: "Pay Later", component: "pay-later"},
    {id: 3, name: "Micro Loan", component: "micro-loan"},
    {id: 4, name: "Credit Card", component: "credit-card"},
  ];
}
