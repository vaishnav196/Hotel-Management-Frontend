import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../product/product.component';
import { Product } from '../admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
private url="http://localhost:8080/product"
  getProducts():Observable<product[]>{
    return this.http.get<product[]>(`${this.url}`)
  }


createNewProducts(product:Product){
  return this.http.post<Product>(`http://localhost:8080/product`,product)
}
 

}
