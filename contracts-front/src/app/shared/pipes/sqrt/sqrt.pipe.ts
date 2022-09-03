import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {

  transform(value: any): any {
    try {
      return Math.sqrt(Number(value))
    } catch (error) {
      return 0
    }
  }

}
