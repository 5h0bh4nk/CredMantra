import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

enum stage{
  otp_verification = 1,
  offer_details = 2,
}

@Component({
  selector: 'app-pay-later',
  templateUrl: './pay-later.component.html',
  styleUrls: ['./pay-later.component.css']
})

export class PayLaterComponent {
  stages: typeof stage = stage;
  current_stage: stage = stage.offer_details;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = true;
  component_name = "pay-later";

  constructor(private _formBuilder: FormBuilder) {};

  proceedToCompanies(){
    this.current_stage = stage.offer_details;
  }
}
