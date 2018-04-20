import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(val: any[], params: string[]): string {
    return val.join(params[0]);
  }

}
