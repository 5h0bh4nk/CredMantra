import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

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
  stages: typeof stage = stage;
  current_stage: stage = stage.personal_details;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = true;

  constructor(private _formBuilder: FormBuilder) {};

  name: string = '';
  gender: string = '';
  email: string = '';
  loan_amount: number = 0;
  employment_type: string = '';
  income: number = 0;
  pincode: number = 0;
  city: string = '';
  state: string = '';
  
}
