import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe',
})
export class CurrencyPipePipe implements PipeTransform {
  transform(amount: number, convertFrom: string, convertTo: string) {
    let a = Number(amount);
    let b = Number(convertFrom);
    let c = Number(convertTo);
    if (a > 0) return Math.round((c / b) * a).toFixed(2);
    else return '';
  }
}
