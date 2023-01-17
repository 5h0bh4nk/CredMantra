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
  current_stage: stage = stage.otp_verification;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = true;

  constructor(private _formBuilder: FormBuilder) {}
}
