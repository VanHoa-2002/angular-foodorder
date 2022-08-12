import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from '../guard/user.guard';
import { Role } from '../shared/models/Role';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './minor/not-found/not-found.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FoodpageComponent } from './pages/foodpage/foodpage.component';
import { HomeComponent } from './pages/home/home.component';
// import { LayoutComponent } from './layout/layout.component';
// import { LoginComponent } from './pages/login/login.component';
// import { LogoutComponent } from './pages/logout/logout.component';
// import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:"guest",
    component:LayoutComponent,
    children:[
      {
        path:"", component: HomeComponent
       },
      {
        path: 'search/:searchTerm', component: HomeComponent
       },
       {
         path:'tag/:tag',component:HomeComponent
       }
       ,{
         path:'food/:id',component:FoodpageComponent
       }
       ,{
         path:'cart-page',component:CartPageComponent
       }
       ,{
         path:'not-found',component:NotFoundComponent
       }
       ,{
        path:'checkout',component:CheckoutComponent
       }
    ]  
  },
  
];

// const routes: Routes = [
//   {
//     path:"auth",
//     component:LayoutComponent,
//     // canActivateChild:[AdminGuard],
//     children:[
//       {
//         path:"register",
//         component:RegisterComponent
//       },
//       {
//         path:"login",
//         component:LoginComponent
//       },
//       {
//         path:"forgot",
//         component:LogoutComponent
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
