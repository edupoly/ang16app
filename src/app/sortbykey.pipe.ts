import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbykey'
})
export class SortbykeyPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): any[] {
    console.log(args)
    console.log(value)
    value.sort(function(a,b){

      if(a[args[0]]>b[args[0]]){
        return 1
      }
      else{
        return -1
      }
    })
    console.log(value)
    return value;
  }

}
