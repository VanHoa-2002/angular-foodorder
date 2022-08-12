import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';
import { AccountService } from '../services/account/account.service';
import { Role } from '../shared/models/Role';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !:FormGroup;
  role:Role = Role.User
  constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient,private accountServices:AccountService) {
    
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/account").subscribe((res)=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.decode(this.loginForm.value.password)
      })
      if(user){
        console.log(user);
        this.accountServices.myMethod(user);
        if(user.role=='admin'){
          this.accountServices.saveAdminInfo(user).subscribe((res)=>{})
        }
        alert("You has been registered successfully")
      this.loginForm.reset()
      this.router.navigate(['guest']);
      }else{
        alert("The Username or Password is Incorrect, Please try again !")
      }
    },err=>{
      console.log(err);
    })
  }
  decode(pass:any) {
    const passwordMd5 = Md5.hashStr(pass).toString();
    return passwordMd5 
  }
}
