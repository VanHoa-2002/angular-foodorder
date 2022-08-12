import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
import { map, Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

// import { sample_foods, sample_tags } from 'src/data';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private _http:HttpClient) { }

  getAll(): Observable<Foods[]>  {
    return this._http.get<any>("http://localhost:3000/product");
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().subscribe((res)=>{
      res.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    })
  }

  getAllTags():  Observable<Tag[]> {
    return this._http.get<any>("http://localhost:3000/tag");
  }
  
  getFoodById(foodId: number){
    return this.getAll().subscribe((res)=>{
      res.find(food => food.id == foodId) ?? new Foods();
    })
  }
  editFoodById(foodId: number,data :any){
     this._http.put("http://localhost:3000/product/"+foodId,data).subscribe((res)=>{
      return res;
     })
  }
  addProduct(data:Foods):Observable<Foods>{
   return this._http.post<any>("http://localhost:3000/product",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteProduct(foodId:number):Observable<Foods>{
     return this._http.delete<any>("http://localhost:3000/product/"+foodId).pipe(map((res:any)=>{
      return res
    }))
  }
  }


