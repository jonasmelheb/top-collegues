import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value >= 0 ? `+ ${value}` : `- ${value * -1}`;
  }
}
