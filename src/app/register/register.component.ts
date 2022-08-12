import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account/account.service';
import { Md5 } from 'ts-md5';
import { User } from '../shared/models/User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm! :FormGroup
  constructor(private formBuilder:FormBuilder,private accountServices:AccountService,private router : Router,private http:HttpClient) { }
  newUser:User = new User
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      repass:['',Validators.required]
    })
  }
  register(){
    this.newUser.fullname=this.registerForm.value.fullname;
    this.newUser.email=this.registerForm.value.email;
    this.newUser.password=this.decode(this.registerForm.value.password);
    // this.newUser.repass=this.decode(this.registerForm.value.repass);
    // this.http.post<any>("http://localhost:3000/account",this.newUser).subscribe((res)=>{
    this.accountServices.registerAction(this.newUser).subscribe((res)=>{
      alert("You has been registered successfully")
      this.registerForm.reset()
      this.router.navigate(['login']);
    },err=>{
      alert("error")
    })
  }
  decode(pass:any) {
    const passwordMd5 = Md5.hashStr(pass).toString();
    return passwordMd5 
  }

}
