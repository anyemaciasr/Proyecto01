import { Component, OnInit } from '@angular/core';
import { Transporte } from '../../Models/transporte';
import { TransporteService } from 'src/app/services/transporte.service';

@Component({
  selector: 'app-transporte-consulta',
  templateUrl: './transporte-consulta.component.html',
  styleUrls: ['./transporte-consulta.component.css']
})
export class TransporteConsultaComponent implements OnInit {
  
  searchText:string;
  transportes:Transporte[];
  constructor(private transporteServices:TransporteService) { }

  ngOnInit(): void {
    this.transporteServices.gets().subscribe(t=> {
      this.transportes = t;
    });
  }

}
