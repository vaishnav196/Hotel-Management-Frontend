import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

getUser(){
  return this.http.get("http://localhost:8080/user");
}

getUserById(userId:number){
  return this.http.get(`http://localhost:8080/user/${userId}`)
}

}
