import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { Order } from 'src/app/shared/models/Order';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private _http:HttpClient) { }
  getOrder(): Observable<Order[]>{
    return this._http.get<any>("http://localhost:3000/order");
  }
  postOrder(data:Order){
    return this._http.post("http://localhost:3000/order",data).pipe(map((res:any)=>{
      return res; 
    }))
  }
}
