import { CartItem } from "./CartItem";
import { Customer } from "./Customer";

export class Order{
    id!:number;
    totalAmount!:number;
    carts:CartItem []=[];
    payment!:string;
    customer:Customer = new Customer;
    showChild:boolean = false;
}