import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customHidePassword'
})
export class CustomHidePasswordPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = false ): string {
    return ( mostrar ) ? '*'.repeat(value.length) : value;
  }

}
