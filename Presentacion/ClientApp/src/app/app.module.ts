import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UsuarioRegistroComponent } from './logisticaDelSinu/usuario-registro/usuario-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioService } from './services/usuario.service';
import { UsuarioConsultaComponent } from './LogisticaDelSinu/usuario-consulta/usuario-consulta.component';
import { FiltroUsuariosPipe } from './pipe/filtro-usuarios.pipe';
import { ActualizarUsuarioComponent } from './LogisticaDelSinu/actualizar-usuario/actualizar-usuario.component';
import { RegistroHotelComponent } from './LogisticaDelSinu/Hoteles/registro-hotel/registro-hotel.component';
import { ConsultaHotelComponent } from './LogisticaDelSinu/Hoteles/consulta-hotel/consulta-hotel.component';
import { FiltroHotelesPipe } from './pipe/Hoteles/filtro-hoteles.pipe';
import { ActualizarHotelComponent } from './LogisticaDelSinu/Hoteles/actualizar-hotel/actualizar-hotel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { ModalInfoComponent } from './@base/modal-info/modal-info.component';
import { RestauranteRegistroComponent } from './LogisticaDelSinu/Restaurantes/restaurante-registro/restaurante-registro.component';
import { RestauranteConsultaComponent } from './LogisticaDelSinu/Restaurantes/restaurante-consulta/restaurante-consulta.component';
import { RestauranteActualizarComponent } from './LogisticaDelSinu/Restaurantes/restaurante-actualizar/restaurante-actualizar.component';
import { FiltroRestaurantePipe } from './pipe/Restaurante/filtro-restaurante.pipe';
import { HotelService } from './services/hotel.service';
import { RestaurantesService } from './services/restaurantes.service';
import { LoginComponent } from './LogisticaDelSinu/Login/login/login.component';
import { FiltroTransportePipe } from './pipe/Transporte/filtro-transporte.pipe';
import { TrasporteActualizarComponent } from './LogisticaDelSinu/Transpote/trasporte-actualizar/trasporte-actualizar.component';
import { TransporteRegistroComponent } from './LogisticaDelSinu/Transpote/transporte-registro/transporte-registro.component';
import { TransporteConsultaComponent } from './LogisticaDelSinu/Transpote/transporte-consulta/transporte-consulta.component';
import { TransporteService } from './services/transporte.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UsuarioRegistroComponent,
    UsuarioConsultaComponent,
    FiltroUsuariosPipe,
    ActualizarUsuarioComponent,
    RegistroHotelComponent,
    ConsultaHotelComponent,
    FiltroHotelesPipe,
    FiltroRestaurantePipe,
    ActualizarHotelComponent,
    AlertModalComponent,
    ModalInfoComponent,
    RestauranteRegistroComponent,
    RestauranteConsultaComponent,
    RestauranteActualizarComponent,
    LoginComponent,
    FiltroTransportePipe,
    TrasporteActualizarComponent,
    TransporteConsultaComponent,
    TransporteRegistroComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  entryComponents:[AlertModalComponent],
  providers: [UsuarioService,HotelService,RestaurantesService,TransporteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
