import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.foodService.getAll().subscribe((res)=>{
         this.foods=res.filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
        })
      else if (params['tag']){
        if(params['tag']=='All'){
          this.foodService.getAll().subscribe((res)=>{
            this.foods=res
          })
        }else{
          this.foodService.getAll().subscribe((res)=>{
            this.foods=res.filter(food => food.tags ?.includes(params['tag']))
        })
      }
      }
      else{
        this.foodService.getAll().subscribe((res)=>{
          this.foods=res
        })
      }
    })

  }

  ngOnInit(): void {
  }

}
