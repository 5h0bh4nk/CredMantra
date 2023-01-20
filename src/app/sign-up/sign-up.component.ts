import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  otp_sent: boolean = false;

  // details: FormGroup;

  phone: any = '';
  name: any = '';
  otp: any = '';

  loading: boolean = false;

  // fetch data from mat-form-field

  constructor(private authService: AuthService, private router: Router, public datepipe: DatePipe) {
  }

  authenticate() {
    // send phone number
    this.loading = true;
    console.log(this.phone, this.name);
    this.authService.loginUser({phone: this.phone, name: this.name}).then((response) => {
      console.log(response);
      if(response.type == 'success'){
        this.otp_sent = true;
      }
      else{
        // write an error to screen
        document.getElementById('error')!.innerHTML = "Some error occured . Kindly retry !";
      }
    });

    this.loading = false;
  }

  // verify otp
  verifyOTP() {
    this.loading = true;
    console.log({phone: this.phone,otp: this.otp})
    this.authService.verifyOTPAndSignup({phone: this.phone,otp: this.otp})
    .then((response) =>{
      console.log(response);
      if(response.type=='success'){
        let currentDateTime = new Date();
        localStorage.setItem('phone', this.phone);
        localStorage.setItem('user', response.data.userId)
        localStorage.setItem("jwt_token", response.data.token);
        // localStorage.setItem("jwt_expiration", )
        this.router.navigateByUrl('/dashboard');
      }
    })
    this.loading = false;
  }

  
}
