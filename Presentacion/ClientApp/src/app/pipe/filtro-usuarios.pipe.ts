import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../logisticaDelSinu/Models/usuario';

@Pipe({
  name: 'filtroUsuarios'
})
export class FiltroUsuariosPipe implements PipeTransform {

  transform(usuario: Usuario[], searchText:string): any {
    if(searchText == null) return usuario;
    return usuario.filter(p=>(p.identificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)||(p.primerNombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)|| (p.segundoNombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1))
  }

}
