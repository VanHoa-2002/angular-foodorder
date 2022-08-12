import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  food!:Foods;
  fileSelect = "../../../../assets/default-thumbnail.jpg"
  constructor(private foodService:FoodService,private router :Router,private activateRoute:ActivatedRoute) { 
    activateRoute.params.subscribe((params)=>{
      if(params['id']){
       this.foodService.getAll().subscribe((res)=>{
             this.food = res.find(food => food.id == params['id'])!
            })
      }
    })
  }
  
  ngOnInit(): void {
  }
  onSubmit(frm:NgForm){
    this.activateRoute.params.subscribe((param)=>{    
      this.food['name']=frm.value['name']
      this.food['price']=frm.value['price']
      this.food['cookTime']=frm.value['cookTime']
      this.food['origins']=frm.value['origins'].slice(',')
      this.food['stars']=frm.value['stars']
      this.food['tags']=frm.value['tags'].slice(',')
      this.food['imageUrl']=this.fileSelect;
      this.foodService.editFoodById(param['id'],this.food)
      this.foodService.getAll().subscribe((res)=>{
        return res
      })
    })
    this.router.navigateByUrl('/admin');
  }
  onFileSelected(e:any){
    if(e.target.files){
      console.log(e.target.files[0]);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload= (event :any)=>{
        this.fileSelect=event.target.result

        console.log(this.fileSelect);
      }
    }
  }
  onCanCel(){
      this.router.navigateByUrl('/admin');
  }
}
