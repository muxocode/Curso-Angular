import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePrueba'
})
export class PipePruebaPipe implements PipeTransform {

  transform(value: string, args: number): any {
    debugger;
    let oString:string= value;
    return oString.substr(0,args);
  }

}
