import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RegistrationService {

 private baseUrl:string = environment.API_URL;
 private headers = new HttpHeaders({"Content-Type": "application/json","Access-Control-Allow-Origin":"*"});

  constructor(private http: HttpClient) {
  }

  fetchAllUsersReq() :Observable<any> {
    let body = "";
    return this.http.post(this.baseUrl+"products/fetchAll", body, {headers:this.headers})
          .map((res) => {
            return res;
          }).catch((error:any) => {
            console.log(error);
            return error;
    });
  }


}
