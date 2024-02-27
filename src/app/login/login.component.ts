
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Token } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  hide = true;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router, private userService: UserService) {
    this.LoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  LoginForm: FormGroup;
  ngOnInit(): void {
  }

  onSubmitLogin() {
    if (this.LoginForm.valid) {
      this.loginService.login(this.LoginForm.value).subscribe((response) => {

        const jwttoken = response.jwtToken;
        console.log(response);
        console.log(response.jwtToken);
        this.loginService.saveToken(jwttoken);

        this.userService.getUser().subscribe((data: any) => {
          console.log(data);
          if(data.username==='admin'){
           this.loginService.isAdminLoged=true;
           this.router.navigateByUrl('/Admin')
          }
          else{
            localStorage.setItem('cartId', data.cart.cartId);
            localStorage.setItem('userId', data.userId);
            this.router.navigateByUrl("");
          }
        
        })

      })
    }

  }

  allFieldsFilled(): boolean {
    const controls = this.LoginForm.controls;
    for (const controlName in controls) {
      if (controls.hasOwnProperty(controlName)) {
        const control = controls[controlName];
        if (control.invalid || control.value === '') {
          return false;
        }
      }
    }
    return true;
  }
}

