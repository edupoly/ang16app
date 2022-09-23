import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCarousal]'
})
export class CarousalDirective {

  constructor(public el:ElementRef) {
    console.log("this.el.nativeElement.children.",this.el.nativeElement.children)
    for(var i=0;i<=2;i++){
      console.log(this.el.nativeElement.children[0])
    }
  }

}
