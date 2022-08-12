import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';
import { LayoutComponent } from './layout/layout.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component';


const routes: Routes = [
  {
    path:"admin",
    component:LayoutComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:"",
        component:ProductsComponent,
      },
      {
        path:"add",
        component:AddProductComponent
      },
      {
        path:"edit/:id",
        component:EditProductComponent
      },
      {
        path:"order",
        component:OrdersComponent
      },
      {
        path:"register",
        component:RegisterAdminComponent
      },
      {
        path:"login",
        component:LoginAdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
