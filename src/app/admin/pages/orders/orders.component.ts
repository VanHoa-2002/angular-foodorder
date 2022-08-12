import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';
import { CartService } from 'src/app/services/cart/cart.service';
import { Order } from 'src/app/shared/models/Order';
import { Cart } from 'src/app/shared/models/Cart';
import { AccountService } from 'src/app/services/account/account.service';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  listOrder!:Order[];
  constructor(private orderServices: CheckoutService) {
    this.orderServices.getOrder().subscribe((cart) => {
      this.listOrder = cart;
      console.log(typeof(cart));
    })
   }
  ngOnInit(): void {
      
  }

}
