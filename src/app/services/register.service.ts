import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

 private url="http://localhost:8080/user";

  onRegister(userData:any):Observable<any>{

    return this.http.post(`${this.url}`,userData);
  }


}
