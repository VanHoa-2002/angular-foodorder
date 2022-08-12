import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account/account.service';

@Injectable({
  providedIn: 'root'
})

export class UserGuard implements CanActivate{
  constructor(private router:Router,private accountServices :AccountService){

  }
  canActivate(
    Route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.accountServices.isLoggerIn()){
        // console.log(Route.data?.['roles']);
        return true;
      }else{
        alert("Hello customer, you must be login to continue !");
        this.router.navigate(['/login'])
        return false;
      }
  }
}

