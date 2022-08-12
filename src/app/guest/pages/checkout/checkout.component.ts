import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';
import { Cart } from 'src/app/shared/models/Cart';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart!:Cart;
  checkoutForm!:FormGroup
  loading!:boolean;
  paymethod=["Ship COD", "Credit Card"]
  newOrder:Order = new Order
  constructor(private cartService: CartService, private orderServices:CheckoutService, private formBuilder:FormBuilder,private router:Router) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
   }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      Name:['',Validators.required],
      Email:['',Validators.required],
      Payment:['',Validators.required],
      Address:['',Validators.required],
    })
  }
  checkout(){
    console.log(this.checkoutForm.value);
    let loader = document.querySelector(".load");
    console.log(loader);
      this.newOrder.customer.customerName=this.checkoutForm.value.Name;
      this.newOrder.customer.customerEmail=this.checkoutForm.value.Email;
      this.newOrder.customer.customerAddress=this.checkoutForm.value.Address;
      this.newOrder.totalAmount=this.cart.totalPrice;
      this.newOrder.payment=this.checkoutForm.value.Payment;
      this.newOrder.carts=this.cart.items;
      this.newOrder.showChild=false;
      this.newOrder.id=Date.now() / 1000 | 0 ;
      this.orderServices.postOrder(this.newOrder).subscribe((res)=>{
        return res
        })
        this.message();
        this.checkoutForm.reset()
      }
      message(){
      this.loading = true
      setTimeout(()=>{
        alert("Your purchase has been successful !")
        this.loading=false;
        window.localStorage.clear();
        location.reload()
      },3000)
      }
  }
