import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { User } from 'src/app/shared/models/User';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  constructor(private accountServices: AccountService,private formBuilder:FormBuilder,private router:Router) { }
  public registerAdminForm! :FormGroup
  newUser:User = new User
  ngOnInit(): void {
    this.registerAdminForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }
  onSubmit(){
    this.newUser.fullname=this.registerAdminForm.value.name;
    this.newUser.email=this.registerAdminForm.value.email;
    this.newUser.password=this.decode(this.registerAdminForm.value.password);
    this.newUser.role="admin";
    this.accountServices.registerAction(this.newUser).subscribe((res)=>{
      alert("Administrator account has been created successfully")
      this.registerAdminForm.reset()
      this.router.navigateByUrl('/admin/login');
    },err=>{
      alert("error")
    })
  }
  decode(pass:any) {
    const passwordMd5 = Md5.hashStr(pass).toString();
    return passwordMd5 
  }

  

}
