import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  @Input()
  visible = false;
  @Input()
  notFoundMessage = "Nothing Found!";
  @Input()
  resetLinkText = "Reset";
  @Input()
  resetLinkRoute = "/guest";
  image_notfound:any;
  constructor() {
  }
  ngOnInit(): void {
    if(this.notFoundMessage =="Your Cart Is Empty!")
    {
      console.log(this.notFoundMessage);
      this.image_notfound = '../../../../assets/empty-cart.png'
    }else{
      this.image_notfound = '../../../../assets/Under_Contruction.svg'
    }
  }

}
