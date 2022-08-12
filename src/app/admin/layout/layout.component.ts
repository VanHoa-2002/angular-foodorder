import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  userInfo!:any
  constructor(private router:Router,private accountServices:AccountService) { 
    
  }
  ngOnInit(): void {
    this.accountServices.getAdminInfo().subscribe((res)=>{
      this.userInfo=res
      console.log(this.userInfo[0].fullname);
    })
  }

  logout(id:number){
    this.accountServices.deleteAdminInfo(id).subscribe((res)=>{})
    this.userInfo=null
    alert("Logout successfully")
    this.router.navigate(['admin/login'])
  }
}
