import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
})
export class MultiplyPipe implements PipeTransform {
  public transform(value: number, factor: number = 1): number {
    if (typeof value === 'number' && typeof factor === 'number') {
      return value * factor;
    }
    throw new Error('Invalid value or factor');
  }
}
