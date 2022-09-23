import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(public aR:ActivatedRoute) { }
  productTitle:any;
  product:any;
  ngOnInit(): void {
    this.aR.params.subscribe((params)=>{
      this.productTitle=params['ptitle'];
    })
    this.aR.queryParams.subscribe((product)=>{
      this.product=product;
      console.log(product)
    })
  }

}
