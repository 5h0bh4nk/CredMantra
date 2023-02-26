import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { timer, takeWhile, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

export interface DialogData {
  phone: string;
  otp: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private authService: AuthService,
  ) {}

  error: string = '';
  country_code = '+91';
  seconds: number = 0;
  counter: number = 0;
  minutes: number = 0;
  timeRemaining$: any;

  startTimer() {
    this.counter = 300;

    this.timeRemaining$ = timer(0, 1000).pipe(
      takeWhile( () => this.counter > 0 ),
      tap(() => {
        this.counter--;
      }))
      .subscribe(() => {
        this.seconds = this.counter % 60;
        this.minutes = Math.floor(this.counter / 60);
      });
  }



  verifyOTP() {
    if(this.data.otp.length!=6){
      this.error = 'OTP must be 6 digits';
      return;
    }
    // this.loading = true;
    this.authService.verifyOTPAndSignup({phone: this.country_code + this.data.phone,otp: this.data.otp})
    .then((response) =>{
      if(response.type=='success'){
        this.dialogRef.close();
      }
      else{
        this.error = 'OTP is incorrect';
      }
    })
  }

  resendOTP() {
    this.authService.resendOTP({phone: this.country_code + this.data.phone})
    .then((response) =>{
      if(!response) {
        this.error = 'Some error occured';
        return;
      }
      if(response.type=='success'){
        this.data.otp = '';
        this.error = 'OTP sent';
        this.startTimer();
      }
      else{
        this.error = 'Some error occured';
      }
    })
  }
}
