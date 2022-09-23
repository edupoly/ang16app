import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public cS:CartService) { }
  @Input() product:any;
  isInCart:boolean=false;
  ngOnInit(): void {
    this.cS.cartSubject.subscribe((cartItems:any)=>{
      var x = cartItems.filter((item:any)=>{
        return item.id===this.product.id?true:false
      })
      if(x.length!==0){this.isInCart=true}
      else{this.isInCart=false}
    })
  }
  addProductToCart(product:any){
    this.cS.addToCart(product)
  }
}
