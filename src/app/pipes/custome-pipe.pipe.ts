import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customePipe',
  standalone: true
})
export class CustomePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return "#$# : " + value;
  }

}
