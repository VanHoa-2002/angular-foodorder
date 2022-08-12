import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  foods: Foods[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((param) => {
      if (param['searchTerm'])
         this.foodService.getAll().subscribe((res)=>{
          res.filter(food => food.name.toLowerCase().includes(param['searchTerm'].toLowerCase()))
         })
      else
         foodService.getAll().subscribe((res)=>{
          this.foods = res;
         });
    })

  }

  ngOnInit(): void {
  }
  deleteProduct(id :number){
      if(confirm("Are you sure to delete this product ?")==true){
        this.foodService.deleteProduct(id).subscribe((res)=>{
         this.foodService.getAll().subscribe(data=>{
           this.foods=data
          })
        }
      )
    }
    }
  }

