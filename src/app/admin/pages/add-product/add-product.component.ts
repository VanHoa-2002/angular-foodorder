import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formValue !:FormGroup;
  fileSelect = "../../../../assets/default-thumbnail.jpg"
   newProduct:Foods = new Foods
  constructor(private router:Router, private formBuilder: FormBuilder,private foodServices:FoodService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id:[''],
      name:['',[Validators.required]],
      price:['',[Validators.required]],
      cookTime:['',[Validators.required]],
      origins:['',[Validators.required]],
      stars:['',[Validators.required]],
      tags:['',[Validators.required]],
      ImageUrl:['']
    })
  }
  onSubmit(){
    // this.newProduct.id=this.formValue.value.id;
    this.newProduct.name=this.formValue.value.name;
    this.newProduct.price=this.formValue.value.price;
    this.newProduct.cookTime=this.formValue.value.cookTime;
    this.newProduct.origins=this.formValue.value.origins;
    this.newProduct.stars=this.formValue.value.stars;
    this.newProduct.tags=this.formValue.value.tags;
    this.newProduct.imageUrl=this.fileSelect;
    
      this.foodServices.addProduct(this.newProduct).subscribe((res)=>{
        alert("This product has been added successfully !")
      this.formValue.reset();
    })
  }
  onFileSelected(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload= (event :any)=>{
        this.fileSelect=event.target.result
      }
    }
  }


}
