import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   return next.handle(request);
  // }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    let jwtToken = localStorage.getItem('token');
    if (jwtToken == null || jwtToken == "null") {
      request = request.clone({
       
      });
     
    }
    else{
        // console.log(jwtToken)
      request = request.clone({
        setHeaders: {
          Authorization:`Bearer ${jwtToken}`
        }
      });
     
    }
  // console.log(request);
    return next.handle(request);
  }
}
