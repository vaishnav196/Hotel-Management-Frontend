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
    this.loginService.islogged=true;
    this.loginService.isAdminLoged=true;
  }
}

isAdminLogged():boolean{

  return this.loginService.isAdminLoged = false;
}

 isloggedIn():boolean{
  return this.loginService.isLoggedIn();
 }
admin(){

   return this.loginService.isAdmin();
    // return this.loginService.isAdminLoged=true;
}

logout(){
this.router.navigateByUrl("/Login")
this.loginService.isAdminLoged=false;
  return this.loginService.logout();  
}


}
