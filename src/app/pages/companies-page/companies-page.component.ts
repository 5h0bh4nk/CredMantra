import { Component, Input } from '@angular/core';

export interface category {
  id: Number;
  name: String;
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
    {id: 1, name: "Personal Loan"},
    {id: 2, name: "Pay Later"},
    {id: 3, name: "Micro Loan"},
    {id: 4, name: "Credit Card"},
  ];
}
