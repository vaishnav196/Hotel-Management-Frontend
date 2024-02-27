import { Component, OnInit } from '@angular/core';

// import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { product } from '../product/product.component';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';


export interface Cart {
  product:any;
  price: number;
  quantity: number;
  totalPrice:number;
 
}


let cartData: Cart[] = [];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent  implements OnInit{
cartData:any;
s = new Subject()
cartId:any=localStorage.getItem('cartId');
displayedColumns: string[] = [ 'product', 'price', 'quantity','delete'];
dataSource: any=cartData;
  cartTotalPrice:number;
 

  
productId:number;
  constructor(private cartService:CartService, private orderService:OrderService,private productService:ProductService,private router:Router){ }

ngOnInit(): void {
  // this.fetchCart(); 
  this.fetchCartById(); 
  // this.placeOrder(this.cartId);
  this.getCart();

  this.s.subscribe(()=>{})
}
 
// fetchCart(){
//   this.cartService.getCartProduct().subscribe((products)=>{  
// console.log(products)
// // this.cartData=products;
// // console.log(cartData)
//   })
// }

placeOrder(cartId:number){
  this.orderService.placeOrder(this.cartId).subscribe(()=>{},
  (error)=>{

    this.router.navigateByUrl("/Orders");
  });
 
}


addToCart(productId:number){
  // console.log(productId)
 
  this.cartService.addToCart(this.cartId,productId).subscribe(()=>{},
  (error)=>{
    this.router.navigateByUrl("/Cart");
  }
  );
  this.fetchCartById();

}

fetchCartById(){
  this.cartService.getCartProductById().subscribe(
    (cart:any)=>{
      // console.log(cart)
      this.s.next(true)
cartData=cart
// console.log(cartData);
this.dataSource=new MatTableDataSource(cartData);
  })
}
removeProduct(productId:number){
  this.cartService.removeFullProduct(this.cartId,productId).subscribe();
}

deleteProduct(productId:number){
 console.log(productId);
 console.log(this.cartId);
  this.cartService.deleteProductfromCart(this.cartId,productId).subscribe();
  this.getCart()
  this.fetchCartById()
}


getCart(){
  this.cartService.getCartById().subscribe((tp)=>{
    console.log(tp);
    this.cartTotalPrice=tp.totalPrice;
  });
}
}
