import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
// private url="http://localhost:8080/{cartId}/product/{productId}"
  addToCart( cartId:number,productId:number):Observable<any>{
    let cart=localStorage.getItem('cartId');
    const headers=new HttpHeaders().set('cartId',cart)
    return this.http.post<any>(`http://localhost:8080/${cartId}/product/${productId}`,{cartId,productId},{headers});
  }


  getCartProduct():Observable<Cart[]>{
    return this.http.get<Cart[]>(`http://localhost:8080/cart`)
  }


  getCartProductById():Observable<Cart[]>{
    let cartId=localStorage.getItem('cartId');
    return this.http.get<Cart[]>(`http://localhost:8080/cart/${cartId}`)
  }


  deleteProductfromCart(cartId:number,productId:number){  
    // let cart=localStorage.getItem('cartId');  
    // const headers=new HttpHeaders().set('cartId',cart)
    return this.http.delete(`http://localhost:8080/${cartId}/product/${productId}`);
  }

removeFullProduct(cartId:number,productId:number){
  return this.http.delete(`http://localhost:8080/${cartId}/products/${productId}`);
}


getCartById():Observable<any>{
  let cartId=localStorage.getItem('cartId');
  return this.http.get<any>(`http://localhost:8080/carts/${cartId}`)
}
  
}
