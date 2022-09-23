import { Component } from '@angular/core';
import { ArtService } from './art.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n1=0;
  n2=0;
  result:any=0
  constructor(public as:ArtService){}
  add(){
    this.result=this.as.addNumbers(this.n1,this.n2);
  }
  sub(){
    this.result=this.as.substract(this.n1,this.n2)
  }
  mul(){
    this.result=this.as.multiply(this.n1,this.n2)
  }
  div(){
    this.result=this.as.divide(this.n1,this.n2)
  }
  rem(){
    this.result=this.as.reminder(this.n1,this.n2)
  }
}
