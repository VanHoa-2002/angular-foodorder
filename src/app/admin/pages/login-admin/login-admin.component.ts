import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  public loginAdminForm !:FormGroup;
  // role:Role = Role.User
  // user:User = new User
  constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient,private accountServices:AccountService) {
    
   }

  ngOnInit(): void {
    this.loginAdminForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  onSubmit(){
    this.accountServices.loginAction().subscribe((res)=>{
      let user = res.find((a:any)=>{
        return a.email === this.loginAdminForm.value.email && a.password === this.decode(this.loginAdminForm.value.password) && a.role==='admin'
      })
      if(user!=null){
          this.accountServices.myMethod(user);
          this.accountServices.saveAdminInfo(user).subscribe((res)=>{})
          alert("Login with admin account successfully!")
        this.loginAdminForm.reset()
        this.router.navigate(['admin']);
        const reloader = setTimeout(()=>{location.reload()},0)
        }
      else{
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
