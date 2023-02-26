import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../classes/constants';
import { BackendBaseService } from '../classes/backendBase';
import { Router } from '@angular/router';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from '@abacritt/angularx-social-login'
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})

export class AuthService extends BackendBaseService{
  module_url = '/auth';
  private isAuthenticated : boolean = false;
  user: SocialUser|null = null;
  loggedIn: boolean = false;


  constructor(private http_class: HttpClient, private router: Router, private socialAuthService: SocialAuthService, public datepipe: DatePipe) {
    super();
  }

  public checkAuthentication():boolean{
    if(this.user){
        this.isAuthenticated = true;
        return true;
    }
    const jwt = localStorage.getItem('jwt_token');
    // const phone = localStorage.getItem('phone');
    if (jwt === null || jwt.length === 0){// || phone === null || phone.length === 0) {
        this.isAuthenticated = false;
        return false;
    } else {
        this.isAuthenticated = true;
        return true;
    }
  }

  public checkGoogleAuthentication():boolean{
    if(this.user){
        this.isAuthenticated = true;
        return true;
    }
    return false;
  }

  public setIsAuthenticated(isAuth:boolean):void{
    this.isAuthenticated = isAuth;
  }

  public isLoggedIn():boolean{
    if(!localStorage.getItem('jwt_token')){
        this.isAuthenticated = false;
        return this.isAuthenticated;
    }
    return true;
  }

  public async verifyAuthentication(): Promise<any> {
    if(this.user){
        // send success promise
        return {type: 'success', data: {
            token: localStorage.getItem('jwt_token'),
        }};
    }
    const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({'Authorization': 'Bearer '+token, 'Content-Type': 'application/json'});

    return this.http_class.get(this.baseURL + Constants.api_version + this.module_url + '/verify-user', {headers: headers})
            .toPromise()
            .then(
                (response) => {
                    return response;
                },
                (error) => {
                    console.log(error);
                    return null;
                }
            )
            .catch((error) => {
                console.log(error);
                return null;
            });
  }

  public loginUser(body: any): Promise<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http_class
        .post(this.baseURL + Constants.api_version + this.module_url + '/', body, {headers: headers})
        .toPromise()
        .then(
            (response) => {
                return response;
            },
            (error) => {
                return null;
            }
        )
        .catch((error) => {
            console.log(error);
            return null;
        });
  }

  public generateOTP(body: any): Promise<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http_class
        .post(this.baseURL + Constants.api_version + this.module_url + '/generate-otp', body, {headers: headers})
        .toPromise()
        .then(
            (response) => {
                return response;
            },
            (error) => {
                alert('Error: Press Ctrl + F5 to update your software or Contact Admin');
                return null;
            }
        )
        .catch((error) => {
            return null;
        });    
  }

  public verifyOTPAndSignup(body: any): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http_class
        .post(this.baseURL + Constants.api_version + this.module_url + '/verify-otp', body, {
            headers: headers,
        })
        .toPromise()
        .then(
            (response: any) => {
                if(response!.type=='success'){
                    let currentDateTime = new Date();
                    localStorage.setItem('user', response.data.userId);
                    localStorage.setItem("jwt_token", response.data.token);
                    localStorage.setItem("jwt_expiration", this.datepipe.transform(currentDateTime.setHours(currentDateTime.getHours() + 12), 'yyyy-MM-dd HH:mm:ss')!);
                    this.router.navigateByUrl('/dashboard');
                }
                    this.setIsAuthenticated(true);
                return response;      
            },
            (error) => {
                return null;
            }
        )
        .catch((error) => {
            return null;
        })
        ;
  }

  public logoutUser() {
    if(this.user){
        this.socialAuthService.signOut();
        this.user = null;
    }
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('user');
    localStorage.removeItem('phone');
    localStorage.removeItem('jwt_exiration');
    this.setIsAuthenticated(false);

    this.router.navigate(['/home']);
  }

  public loginWithGoogle(user: any) {
    localStorage.setItem('jwt_token', user.idToken);
  }

  public resendOTP(body: any): Promise<any> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    return this.http_class
        .post(this.baseURL + Constants.api_version + this.module_url + '/resend-otp', body, {headers: headers})
        .toPromise()
        .then(
            (response) => {
                return response;
            },
            (error) => {
                return null;
            }
        )
        .catch((error) => {
            return null;
        });    
  }
    
}