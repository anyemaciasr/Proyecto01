import { Pipe, PipeTransform } from '@angular/core';
import { Transporte } from 'src/app/LogisticaDelSinu/Models/transporte';

@Pipe({
  name: 'filtroTransporte'
})
export class FiltroTransportePipe implements PipeTransform {

  transform(transaportes: Transporte[],searchText:string): any  {
    if(searchText == null) return transaportes;
    return transaportes.filter(t => (t.nit.toLowerCase().indexOf(searchText.toLowerCase())!= -1)||
      (t.nombre.toLowerCase().indexOf(searchText.toLowerCase())!= -1))
  }
}
