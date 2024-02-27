import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

export interface product{
  productId:number;
  productName:string;
  productDesc:string;
  price:number; 
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   products:product[]=[];
cartId:any=localStorage.getItem('cartId');
cart:[]=[];

quantity:number=1
  constructor(private productService:ProductService,private cartService:CartService,private router:Router){}

  ngOnInit(): void {
      this.loadAllProduct(); 
       
  }


 loadAllProduct():void{
 this.productService.getProducts().subscribe((products)=>{
  console.log(products);
  this.products=products;

 })
}

addToCart(cartId,product):void{
  let token=localStorage.getItem('token');
  if(token==null){
    this.router.navigateByUrl('/Login')
  }
  this.cartService.addToCart(cartId,product.productId).subscribe((prod)=>{
     console.log(prod);
     this.cart=prod;
   
  })
}


inc(productId:number){
  this.quantity=this.quantity+1;
 console.log(productId);
this.cartService.addToCart(this.cartId,productId).subscribe();


}


dec(){
  if(this.quantity>1){

    this.quantity=this.quantity-1;
  }

}



}
