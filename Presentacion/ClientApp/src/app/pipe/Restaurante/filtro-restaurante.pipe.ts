import { Pipe, PipeTransform } from '@angular/core';
import { Restaurante } from 'src/app/LogisticaDelSinu/Models/restaurante';

@Pipe({
  name: 'filtroRestaurante'
})
export class FiltroRestaurantePipe implements PipeTransform {

  transform(restaurantes: Restaurante[],searchText:string): any  {
    if(searchText == null) return restaurantes;
    return restaurantes.filter(r => (r.nit.toLowerCase().indexOf(searchText.toLowerCase())!= -1)||
      (r.nombre.toLowerCase().indexOf(searchText.toLowerCase())!= -1))
  }

}
