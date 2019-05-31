import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolPipe'
})
export class BoolPipe implements PipeTransform {

  transform(value: any,  arg1:any, arg2:any): any {
    debugger;
    let oReturn;
    if(value!=null){
      oReturn= value?arg1:arg2;
    }
      else{
      oReturn="?"
    }

    return oReturn;
  }

}
