import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { CartComponent } from '../cart/cart.component';
import { ActivatedRoute, Router } from '@angular/router';
 export interface Register{
  username:string;
  password:string;
  email:string;
  fullName:string;
  mobile:number;
  cart:{
    cartId:number;
  }
 }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;




  constructor(private formBuilder: FormBuilder, private registerService: RegisterService,private router:Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }
  registerForm: FormGroup;
  ngOnInit(): void {
   
  }

  onSubmitRegister() {
    const form:Register={
      username:this.registerForm.get('username')?.value,
      password:this.registerForm.get('password')?.value,
      email:this.registerForm.get('email')?.value,
      fullName:this.registerForm.get('fullName')?.value,
      mobile:this.registerForm.get('mobile')?.value,
      cart:{
        cartId:0
      }
    }
    if (this.registerForm.valid) {
      this.registerService.onRegister(form).subscribe(
        (error) => {
          alert("Failed to register User");
        },
        (a) => {
          alert("user registered Succesfully");
          
          this.router.navigateByUrl("/Login")
        })
    }

  }

  allFieldsFilled(): boolean {
    const controls = this.registerForm.controls;
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
