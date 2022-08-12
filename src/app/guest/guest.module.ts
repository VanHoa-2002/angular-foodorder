import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LayoutComponent } from './layout/layout.component';
// import { LoginComponent } from './pages/login/login.component';
// import { RegisterComponent } from './pages/register/register.component';
// import { LogoutComponent } from './pages/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestRoutingModule } from './guest.routing';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './minor/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './minor/search/search.component';
import { TagsComponent } from './minor/tags/tags.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FoodpageComponent } from './pages/foodpage/foodpage.component';
import { NotFoundComponent } from './minor/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from './pages/checkout/checkout.component';
// import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodpageComponent,
    NotFoundComponent,
    LayoutComponent,
    CheckoutComponent
    // LayoutComponent,
    // LoginComponent,
    // RegisterComponent,
    // LogoutComponent,
    // PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    GuestRoutingModule,
    ReactiveFormsModule
  ]
})
export class GuestModule { }
