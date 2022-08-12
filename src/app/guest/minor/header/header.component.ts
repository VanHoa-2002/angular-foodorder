import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartQuantity=0;
  userInfo!:any
  constructor(private router : Router,cartService:CartService,private accountServices:AccountService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
    this.userInfo=accountServices.dataGet
    // console.log(this.userInfo.fullname); 
   }
  ngOnInit(): void {
  }
  logout(){
    alert("Logout successfully")
    this.userInfo=null
    this.router.navigate(['login'])
  }

}
