import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  myMethod$: Observable<any>;
  dataGet:any
  private myMethodSubject = new Subject<any>();
  constructor(private _http:HttpClient) {
    this.myMethod$ = this.myMethodSubject.asObservable();
   }
  registerAction(data:any): Observable <User>{
    return this._http.post<any>("http://localhost:3000/account",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  saveAdminInfo(data:any): Observable <User>{
    return this._http.post<any>("http://localhost:3000/admin_info",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getAdminInfo(): Observable <User>{
    return this._http.get<any>("http://localhost:3000/admin_info").pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteAdminInfo(id:number): Observable <User>{
    return this._http.delete<any>("http://localhost:3000/admin_info/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
  loginAction(): Observable <User>{
    return this._http.get<any>("http://localhost:3000/account").pipe(map((res:any)=>{
      return res;
    }))
  }
  isLoggerIn(){
    // console.log(this.dataGet.role);
    if(this.dataGet !=null){
      return true
    }else{
      return false
    }
  }
  isAdmin(){
    // console.log(this.dataGet.role);
    if(this.dataGet.role=='admin'){
      return true
    }else{
      return false
    }
  }
  myMethod(data : any) {
    // console.log(data); // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    // return data
    this.dataGet = data
    // this.myMethodSubject.next(data);
}
}
