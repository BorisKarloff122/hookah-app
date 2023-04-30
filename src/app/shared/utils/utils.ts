import {Observable, of} from "rxjs";
import {mockData} from "./mocks";
import {environment} from "../../../environments/environment";

const env = environment

export interface IResponse{
  code: number,
  err: string,
  errMessage: string,
  data: any
}

class response {
  constructor(public code: number,
              public err: string,
              public errMessage: string,
              public data: any){
    this.code = code;
    this.err  = err;
    this.errMessage = errMessage;
    this.data = data
  }


}
export const populateLocalStorage = () =>{
  if(env.useMockData){
    localStorage.setItem('data', JSON.stringify(mockData));
    console.log('Local data loaded');
    return
  }
  console.log('Local data not required')

}
export const mockTableReq = (tableName: string, prop?: string | null | undefined, searchedData?: any) =>{
  const data = localStorage.getItem('data');

  if(data && !prop){
    return JSON.parse(data)[tableName]
  }
  else if(data && prop){
    return JSON.parse(data)[tableName]
      .find(
        (elem: any) =>
          elem[typeof prop === "string" ? prop : 'id'] === (typeof prop === "string" ? searchedData[prop] : prop))
  }

  else if(!data) {
    return []
  }

  else{
    return undefined;
  }
}

export const mockLoginReq = (loginData: {login: string | null | undefined, password: string | null | undefined}): Observable<IResponse> =>{
  const user = mockTableReq('users', loginData.login, loginData);
  const reqResponse = new response(200, '', '', '');

  if(!user){
    reqResponse.err = 'User not found';
    reqResponse.data = false;
  }

  if(user && user.password !== loginData.password){
    reqResponse.err = 'Wrong password';
    reqResponse.data = false;
  }

  if(user && user.password === loginData.password){
    reqResponse.err = '';
    reqResponse.data = true;
  }

  reqResponse.errMessage = reqResponse.err;
  return of(reqResponse)
}
