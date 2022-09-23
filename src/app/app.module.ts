import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { CarousalDirective } from './carousal.directive';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DefaultComponent } from './default/default.component';
import { CoutnriesComponent } from './coutnries/coutnries.component';
import {HttpClientModule} from '@angular/common/http';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component'
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CarousalDirective,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    DefaultComponent,
    CoutnriesComponent,
    CountryDetailsComponent,
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
