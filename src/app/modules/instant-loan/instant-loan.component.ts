import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-instant-loan',
  templateUrl: './instant-loan.component.html',
  styleUrls: ['./instant-loan.component.css']
})
export class InstantLoanComponent {
  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) {};

  queryDetails = this.formBuilder.group({
    name: '',
    dob: '',
    income: "",
    mobile: "",
    pan: "",
    occupation: "",
    email: "",
    pincode: "",
    gst: "no",
    itr: "no"
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
      product: 'instant-loan',
      email: this.queryDetails.value.email,
      pincode: this.queryDetails.value.pincode,
      gst: this.queryDetails.value.gst,
      itr: this.queryDetails.value.itr
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
