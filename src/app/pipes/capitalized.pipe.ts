import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCapitalized'
})
export class CapitalizedPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): string {
  transform(value: string, activo: boolean): string {
    console.log(value);

    value = value.toLowerCase();
    let nombres = value.split(' ');
    console.log(nombres);

    if ( activo ) {
      nombres = nombres.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      });
      console.log(nombres);
      return nombres.join(' ');
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
      return nombres.join(' ');;
    }
  }
}
