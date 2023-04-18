import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendBaseService } from '../classes/backendBase';
import { Constants } from '../classes/constants';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BackendBaseService{

  constructor(private http_class: HttpClient) {
    super();
  }

  createCustomerApplication(body: any) {
    console.log('aagya')
    return this.http_class
    .post(this.baseURL + '/customer' + '/create', body)
    .toPromise()
    .then(
        (response) => {
          console.log(response);
            return response;
        },
        (error) => {
          console.log(error)
            return {status: 400, message: 'not found'};
        }
    )
    .catch((error) => {
        console.log(error);
        return {status: 400, message: 'not found'};
    });
  }

  createCustomerQuery(body: any) {
    return this.http_class
    .post(this.baseURL + '/customer' + '/query', body)
    .toPromise()
    .then(
        (response) => {
          console.log(response);
            return response;
        },
        (error) => {
          console.log(error)
            return {status: 400, message: 'not found'};
        }
    )
    .catch((error) => {
        console.log(error);
        return {status: 400, message: 'not found'};
    });
  }
}
