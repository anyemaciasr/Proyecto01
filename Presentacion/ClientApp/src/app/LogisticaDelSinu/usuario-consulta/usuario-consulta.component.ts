import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../Models/usuario';

@Component({
  selector: 'app-usuario-consulta',
  templateUrl: './usuario-consulta.component.html',
  styleUrls: ['./usuario-consulta.component.css']
})
export class UsuarioConsultaComponent implements OnInit {

  usuarios:Usuario[];
  searchText:string;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarioService.gets().subscribe(result=>{
      this.usuarios = result;
    });
  }

}
