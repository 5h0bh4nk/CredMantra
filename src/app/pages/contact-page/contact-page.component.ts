import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) {};

  queryDetails = this.formBuilder.group({
    name: '',
    email: "",
    phone: "",
    message: ""
  });

  disabled=false;
  htmlStr = "";

  async onSubmit(): Promise<void> {
    console.log('final', this.queryDetails);
    this.disabled = true;
    const resp: any = await this.customerService.createCustomerQuery({
      name: this.queryDetails.value.name,
      email: this.queryDetails.value.email,
      phone: this.queryDetails.value.phone,
      message: this.queryDetails.value.message
    });

    console.log(resp);
    this.disabled = false;

    if(resp.status===200){
      this.htmlStr = "Your query has been sent !!";
    } else {
      this.htmlStr = "An error occured !!";
    }

  }
}
