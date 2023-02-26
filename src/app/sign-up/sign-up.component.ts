import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ModalComponent } from '../basic_components/modal/modal.component';


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

  user: SocialUser = new SocialUser;

  // details: FormGroup;

  phone: any = '';
  name: any = '';
  otp: any = '';
  animal: string| null = null;

  loading: boolean = false;

  // fetch data from mat-form-field

  constructor(private authService: AuthService, 
              private router: Router, 
              public datepipe: DatePipe, 
              private socialAuthService: SocialAuthService,
              public dialog: MatDialog ) {
  }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.authService.loginWithGoogle(user);
      this.router.navigateByUrl('/dashboard');
    });
  }

  async authenticate() {
    this.loading = true;
    if(this.phone.length != 10){
      document.getElementById('error')!.innerHTML = "Please enter a valid 10 digit phone number";
      this.loading = false;
      return;
    }
    if(this.name.length == 0){
      document.getElementById('error')!.innerHTML = "Please enter a valid name";
      this.loading = false;
      return;
    }
    this.authService.loginUser({phone: '+91'+this.phone, name: this.name}).then((response) => {
      if(!response){
        document.getElementById('error')!.innerHTML = "Some error occured . Kindly retry !";
        this.loading = false;
        return;
      }
      if(response.type == 'success'){
        this.otp_sent = true;
        this.openDialog();
        return;
      }
      else{
        document.getElementById('error')!.innerHTML = "Some error occured . Kindly retry !";
        this.loading = false;
      }
    });
  }

  handleCredentialResponse(response: any) {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {phone: this.phone, otp: this.otp},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
