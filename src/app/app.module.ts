import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { YourproductsComponent } from './yourproducts/yourproducts.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    MyproductsComponent,
    YourproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
