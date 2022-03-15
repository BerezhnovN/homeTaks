import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fensecase',
})
export class FensecasePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .toLocaleLowerCase()
      .split('')
      .map((item, i) => {
        if (i % 2 == 0) {
          item.toUpperCase();
        } else {
          item.toLowerCase();
        }
      })
      .join('');
  }
}
