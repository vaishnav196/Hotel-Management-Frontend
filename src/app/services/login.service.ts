import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  islogged:boolean=false;
  private url="http://localhost:8080/auth/login"
  isAdminLoged:boolean=false;
  constructor(private http:HttpClient,private userService:UserService) { }

  login(credentials:any): Observable<any>{
      this.islogged=true;
      this.isAdminLoged=false;
    return this.http.post(`${this.url}`,credentials);
  }


  saveToken(jwtToken:string):void{
    localStorage.setItem('token',jwtToken);
  }

  getToken():string |null{
    return localStorage.getItem('token');
  }

  logout(){
   localStorage.removeItem('token');
   localStorage.removeItem('cartId');
   localStorage.removeItem('userId');
  
   return this.islogged=false;
  }


isLoggedIn():boolean{
  return this.islogged; 
}

isAdmin():boolean{
  return this.isAdminLoged;
}


}
