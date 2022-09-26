import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CoutnriesComponent } from './coutnries/coutnries.component';
import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductGuard } from './product.guard';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'countries',
    component:CoutnriesComponent
  },
  {
    path:'countryDetails/:acode',
    component:CountryDetailsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'products',
    component:ProductsComponent,
    canActivate:[ProductGuard,AuthGuard],
    children:[
      {
        path:'productDetails/:ptitle',
        component:ProductDetailsComponent
      }
    ]
  },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"**",
    component:DefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
