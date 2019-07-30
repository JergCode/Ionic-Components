import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  transform(value: any[], palabra: string, columna: string): any[] {
    if (!palabra || !columna) {
      return value;
    } else {
      palabra = palabra.toLowerCase();
      return value.filter(item => {
        return item[columna].toLowerCase().includes(palabra);
      });
    }
  }
}
