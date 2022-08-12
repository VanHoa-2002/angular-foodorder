import { CartItem } from "./CartItem";
import { Customer } from "./Customer";

export class Cart{
  items:CartItem[] = [];
  totalPrice:number = 0;
  totalCount:number = 0;
}