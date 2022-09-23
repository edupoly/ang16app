import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cS:CartService) { }
  cartItems:any=[];
  ngOnInit(): void {
    this.cS.cartSubject.subscribe((cartItems)=>{
      this.cartItems=cartItems;
    })
  }

}
