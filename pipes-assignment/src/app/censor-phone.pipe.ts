import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censorPhone',
})
export class CensorPhonePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let newValue: string | null = null;
    if (typeof value === 'string') {
      const length = value.length;
      newValue = value
        .split('')
        .map((char, index) => {
          if (index > 0 && index < length - 2) {
            return '*';
          }
          return char;
        })
        .join('');
    }

    return newValue;
  }
}
