import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-yourproducts',
  templateUrl: './yourproducts.component.html',
  styleUrls: ['./yourproducts.component.css']
})
export class YourproductsComponent implements OnInit {

  
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
