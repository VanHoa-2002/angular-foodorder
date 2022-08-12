import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AdminRoutingModule } from './admin.routing';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ProductsComponent,
    OrdersComponent,
    EditProductComponent,
    AddProductComponent,
    RegisterAdminComponent,
    LoginAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
