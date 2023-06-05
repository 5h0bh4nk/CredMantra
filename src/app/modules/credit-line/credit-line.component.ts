import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-credit-line',
  templateUrl: './credit-line.component.html',
  styleUrls: ['./credit-line.component.css']
})
export class CreditLineComponent {
  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) {};

  queryDetails = this.formBuilder.group({
    name: '',
    income: "",
    mobile: "",
    pan: "",
    occupation: ""
  });

  disabled=false;
  htmlStr = "";
  submitted = false;

  async submit(): Promise<void> {
    console.log('final', this.queryDetails);
    this.disabled = true;
    const resp: any = await this.customerService.createCustomerQuery({
      name: this.queryDetails.value.name,
      income: this.queryDetails.value.income,
      mobile: this.queryDetails.value.mobile,
      pan: this.queryDetails.value.pan,
      occupation: this.queryDetails.value.occupation,
      product: 'credit-line'
    });

    console.log(resp);
    this.disabled = false;

    if(resp.status===200){
      this.htmlStr = "Your query has been sent !!";
      this.submitted = true;
    } else {
      this.htmlStr = "An error occured !! Kindly try again .";
    }
  }
}
