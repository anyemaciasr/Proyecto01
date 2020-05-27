import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from 'src/app/LogisticaDelSinu/Models/hotel';

@Pipe({
  name: 'filtroHoteles'
})
export class FiltroHotelesPipe implements PipeTransform {

  transform(hoteles: Hotel[], searchText:string): any {
    if(searchText == null) return hoteles;
    return hoteles.filter(h => (h.nit.toLowerCase().indexOf(searchText.toLowerCase())!= -1)||
      (h.nombre.toLowerCase().indexOf(searchText.toLowerCase())!= -1))
  }

}
