import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

enum stage{
  otp_verification = 1,
  offer_details = 2,
}

@Component({
  selector: 'app-micro-loan',
  templateUrl: './micro-loan.component.html',
  styleUrls: ['./micro-loan.component.css']
})
export class MicroLoanComponent {
  stages: typeof stage = stage;
  component_name="micro-loan";
  current_stage: stage = stage.offer_details;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = true;

  constructor(private _formBuilder: FormBuilder) {}

  proceedToCompanies(){
    this.current_stage = stage.offer_details;
  }
}
