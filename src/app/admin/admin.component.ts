
import { Component, OnInit } from '@angular/core';
import { product } from '../product/product.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

export interface Product{
  // prdouctId?:number;
  productName:String;
  productDesc:String;
  price:number;
 }
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private productService:ProductService,private router:Router) {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productDesc: ['', Validators.required],
      price: ['', Validators.required]
     
    });
  }
  productForm: FormGroup;
  ngOnInit(): void {

  }
  AddProduct(){
    // const pform:Product={
    //   productName:this.productForm.get('productName')?.value,
    //   productDesc:this.productForm.get('productDesc')?.value,
    //   price:this.productForm.get('price')?.value,

    // }
    // if(this.productForm.valid){
    //   this.productService.createNewProducts(pform).subscribe();
    // }
    // console.log(pform);
    let pform:Product=this.productForm.value;
    console.log(pform)
    this.productService.createNewProducts(pform).subscribe((newdata)=>{
      console.log(newdata);
    });

   console.log(this.productForm.value);

  }

  allFieldsFilled(): boolean {
    const controls = this.productForm.controls;
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





