import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

enum stage{
  otp_verification = 1,
  personal_details = 2,
  employment_details = 3,
  address_details = 4,
}

@Component({
  selector: 'app-personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrls: ['./personal-loan.component.css']
})

export class PersonalLoanComponent {
  stages = stage;
  current_stage: number = 1;
  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  personalDetails = this.formBuilder.group({
    phone: '',
    name:'',
    gender:'male',
    email:'',
    loan_amount: '',
    employment_type:'salaried',
    income: "upto_3_lacs",
    pincode: '',
    city:'',
    state:'',
    residence: 'owned by self/spouse',
    service: "personal_loan"
  })

  isEditable = true;

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) {};

  handleProceed(): void {
    console.log('aaaya');
    this.current_stage = this.current_stage + 1;
    console.log(this.current_stage)
  }


  async onSubmit(): Promise<void> {
    console.log('final',this.personalDetails.value);
    this.isEditable = false;

    const response = await this.customerService.createCustomerApplication({
      phone: this.personalDetails.value.phone,
      name:this.personalDetails.value.name,
      gender:this.personalDetails.value.gender,
      email:this.personalDetails.value.email,
      loan_amount: this.personalDetails.value.loan_amount,
      employment_type:this.personalDetails.value.employment_type,
      income: this.personalDetails.value.income,
      pincode: this.personalDetails.value.pincode,
      city:this.personalDetails.value.city,
      state:this.personalDetails.value.state,
      residence: this.personalDetails.value.residence,
      service: "personal_loan"
    });

    console.log(response);
  }
  
}
