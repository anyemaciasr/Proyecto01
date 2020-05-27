import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from '../../Models/hotel';

@Component({
  selector: 'app-consulta-hotel',
  templateUrl: './consulta-hotel.component.html',
  styleUrls: ['./consulta-hotel.component.css']
})
export class ConsultaHotelComponent implements OnInit {
  hoteles:Hotel[];
  searchText:string;
  constructor(private hotelServices: HotelService) { }

  ngOnInit(): void {
    this.hotelServices.gets().subscribe(h => {
      this.hoteles = h;
    })
  }

}
