import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Food[], desiredFilter) {
    var output: Food[] = [];
    if (desiredFilter === "less") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500 ) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFilter === "more") {
      for (var i = 0; i <input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}