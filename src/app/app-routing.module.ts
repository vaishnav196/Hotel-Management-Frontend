import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Login', component:LoginComponent},
  {path:'Cart', component:CartComponent},
  {path:'Cart/:cartId', component:CartComponent},
  {path:'Product', component:ProductComponent},
  {path:'Orders', component:OrdersComponent},
  {path:'about', component:AboutComponent},
  {path:'Admin', component:AdminComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
