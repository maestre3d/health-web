import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'missingField'
})
export class MissingFieldPipe implements PipeTransform {

  transform(value: string): string {
    return value && value.length > 0 ? value : 'null';
  }

}
