import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../Models/restaurante';
import { RestaurantesService } from 'src/app/services/restaurantes.service';

@Component({
  selector: 'app-restaurante-consulta',
  templateUrl: './restaurante-consulta.component.html',
  styleUrls: ['./restaurante-consulta.component.css']
})
export class RestauranteConsultaComponent implements OnInit {
  restaurantes:Restaurante[];
  searchText:string;
  constructor(private restauranteServices:RestaurantesService) { }

  ngOnInit(): void {
   this.restauranteServices.gets().subscribe(r => {
      this.restaurantes = r;
    });

  }

}
