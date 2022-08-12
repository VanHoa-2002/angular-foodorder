import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GuestRoutingModule } from './guest/guest.routing';
import { GuestModule } from './guest/guest.module';
import { AdminModule } from './admin/admin.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
// import { HeaderComponent } from './guest/minor/header/header.component';
// import { HomeComponent } from './guest/pages/home/home.component';
// import { SearchComponent } from './guest/minor/search/search.component';
// import { TagsComponent } from './guest/minor/tags/tags.component';
// import { CartPageComponent } from './guest/pages/cart-page/cart-page.component';
// import { FoodpageComponent } from './guest/pages/foodpage/foodpage.component';
// import { NotFoundComponent } from './guest/minor/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GuestModule,
    AdminModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
