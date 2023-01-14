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
