import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUserData} from "../shared/models/userData.model";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {IResponse, mockLoginReq} from "../shared/utils/utils";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public env = environment

  constructor(private http: HttpClient) { }

  public loginReq(loginData:any): Observable<IResponse>{
      if(this.env.useMockData){
        return mockLoginReq(loginData)
      }

      return this.http.post<IResponse>(`${this.env.serverUrl}/login`, loginData);
  }
}
