import { UsuarioRegistroComponent } from './logisticaDelSinu/usuario-registro/usuario-registro.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioConsultaComponent } from './LogisticaDelSinu/usuario-consulta/usuario-consulta.component';
import { ActualizarUsuarioComponent } from './LogisticaDelSinu/actualizar-usuario/actualizar-usuario.component';
import { RegistroHotelComponent } from './LogisticaDelSinu/Hoteles/registro-hotel/registro-hotel.component';
import { ConsultaHotelComponent } from './LogisticaDelSinu/Hoteles/consulta-hotel/consulta-hotel.component';
import { ActualizarHotelComponent } from './LogisticaDelSinu/Hoteles/actualizar-hotel/actualizar-hotel.component';
import { RestauranteRegistroComponent } from './LogisticaDelSinu/Restaurantes/restaurante-registro/restaurante-registro.component';
import { RestauranteConsultaComponent } from './LogisticaDelSinu/Restaurantes/restaurante-consulta/restaurante-consulta.component';
import { RestauranteActualizarComponent } from './LogisticaDelSinu/Restaurantes/restaurante-actualizar/restaurante-actualizar.component';
import { LoginComponent } from './LogisticaDelSinu/Login/login/login.component';
import { TrasporteActualizarComponent } from './LogisticaDelSinu/Transpote/trasporte-actualizar/trasporte-actualizar.component';
import { TransporteRegistroComponent } from './LogisticaDelSinu/Transpote/transporte-registro/transporte-registro.component';
import { TransporteConsultaComponent } from './LogisticaDelSinu/Transpote/transporte-consulta/transporte-consulta.component';


const routes: Routes = [
  {
    path: 'UsuarioRegistro',
    component: UsuarioRegistroComponent
  },
  {
    path: 'UsuarioConsulta',
    component: UsuarioConsultaComponent
  },
  {
    path: 'ActualizarUsuario/:identificacion',
    component: ActualizarUsuarioComponent
  },
  {
    path: 'RegistroHotel',
    component: RegistroHotelComponent
  },
  {
    path: 'ConsultaHotel',
    component: ConsultaHotelComponent
  },
  {
    path: 'ActualizarHotel/:nit',
    component: ActualizarHotelComponent
  },
  {
    path: 'RestauranteRegistro',
    component: RestauranteRegistroComponent
  },
  {
    path: 'RestauranteConsulta',
    component: RestauranteConsultaComponent
  },
  {
    path: 'RestauranteActualizar/:nit',
    component: RestauranteActualizarComponent
  },
  {
    path: 'TransporteRegistro',
    component: TransporteRegistroComponent
  },
  {
    path: 'TransporteConsulta',
    component: TransporteConsultaComponent
  },
  {
    path: 'TrasporteActualizar/:nit',
    component: TrasporteActualizarComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
