import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {

  constructor(public pS:ProductService) { }
  products:any=[];
  ngOnInit(): void {
  }
  getAllProducts(){
    this.pS.getFakeProducts().subscribe((products:any)=>{
      this.products=products
    })
  }
}
