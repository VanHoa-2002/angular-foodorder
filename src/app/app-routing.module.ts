import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserGuard } from './guard/user.guard';
import { GuestModule } from './guest/guest.module';
import { GuestRoutingModule } from './guest/guest.routing';
import { NotFoundComponent } from './guest/minor/not-found/not-found.component';
import { CartPageComponent } from './guest/pages/cart-page/cart-page.component';
import { FoodpageComponent } from './guest/pages/foodpage/foodpage.component';
import { HomeComponent } from './guest/pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
     {
    path:"",
    redirectTo:"guest",
    pathMatch:"full",
     },
      {
        path:"",
        loadChildren:()=>import('./guest/guest.module').then(a=>a.GuestModule),

        canActivate:[UserGuard]
        // redirectTo:"guest",
        // pathMatch:"full"
      },
      {
        path:'register',
        component:RegisterComponent,
      },
      {
        path:'login',
        component:LoginComponent
      }
    

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
