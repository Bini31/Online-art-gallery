import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(private _http:HttpClient) { }
  sendData(data:any){

    console.log("data from Service file" , data)

    return this._http.post<any>("http://localhost:5000/users/register", data)
  }
}
