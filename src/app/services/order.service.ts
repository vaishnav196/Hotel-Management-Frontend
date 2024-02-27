import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }


  placeOrder(cartId:number):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/${cartId}/orders`,{})
  }

  getOrders(userId):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/orders/${userId}`)
  }


 
}


