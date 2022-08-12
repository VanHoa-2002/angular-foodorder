import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Customer } from 'src/app/shared/models/Customer';
import { Foods } from 'src/app/shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!:Foods;
  constructor(private activateRoute:ActivatedRoute,
    private foodService:FoodService,private cartService:CartService,private router:Router,private accoutnServices:AccountService) {
      activateRoute.params.subscribe((params)=>{
        if(params['id']){
        this.foodService.getAll().subscribe((res)=>{
          this.food=res.find(food => food.id == params['id'])!
          console.log(res)
        })
        }
      })
     }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('guest/cart-page')
  }

}
