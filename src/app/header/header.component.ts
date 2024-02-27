import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(private loginService:LoginService,private router:Router){
  let token =localStorage.getItem('token')
  if(token){
    this.loginService.islogged=true
  }
}

isAdminLogged(){
  
}

 isloggedIn():boolean{
  return this.loginService.isLoggedIn();
 }


logout(){
this.router.navigateByUrl("/Login")
  return this.loginService.logout();  
}


}
