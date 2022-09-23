import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor() { }
  addNumbers(num1:any,num2:any){
    if(isNaN(num1)||isNaN(num2)){
      return 'please enter number'
    }
    return +(num1)+(+num2)
  }
  substract(num1:any,num2:any){
    if(isNaN(num1)||isNaN(num2)){
      return 'please enter number'
    }
    return num1-num2
  }
  multiply(num1:any,num2:any){
    if(isNaN(num1)||isNaN(num2)){
      return 'please enter number'
    }
    return num1*num2
  }
  divide(num1:any,num2:any){
    if(isNaN(num1)||isNaN(num2)){
      return 'please enter number'
    }
    if(num2===0){
      return "Denominator must not be zero"
    }
    return num1/num2
  }
  reminder(num1:any,num2:any){
    if(isNaN(num1)||isNaN(num2)){
      return 'please enter number'
    }
    return num1%num2
  }
}
