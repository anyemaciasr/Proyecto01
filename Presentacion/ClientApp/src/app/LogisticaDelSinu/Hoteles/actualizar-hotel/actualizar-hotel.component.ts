import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hotel } from '../../Models/hotel';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-actualizar-hotel',
  templateUrl: './actualizar-hotel.component.html',
  styleUrls: ['./actualizar-hotel.component.css']
})
export class ActualizarHotelComponent implements OnInit {

  formGroup: FormGroup;
  hotel:Hotel;
  nit = this.rutaActiva.snapshot.params.identificacion;
  constructor(private hotelService: HotelService, private formBuilder: FormBuilder, private rutaActiva:ActivatedRoute, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.hotelService.get(this.nit).subscribe(h => {
      this.hotel = h;
      alert(this.hotel.nit);
    })
    this.buildForm();
  }

  private buildForm() {
    this.hotel= new Hotel();
    this.hotel.nit = "";
    this.hotel.nombre = "";
    this.hotel.pais = "";
    this.hotel.ciudad = "";
    this.hotel.direccion = "";
    this.hotel.barrio = "";
    this.hotel.telefono = "";
    this.hotel.correoElectronico = "";
    this.hotel.sitioWeb = "";
    this.formGroup = this.formBuilder.group({
      nit: [this.hotel.nit, Validators.required],
      nombre: [this.hotel.nombre, Validators.required],
      pais: [this.hotel.pais, Validators.required],
      ciudad: [this.hotel.ciudad, Validators.required],
      direccion: [this.hotel.direccion, Validators.required],
      barrio: [this.hotel.barrio, Validators.required],
      telefono: [this.hotel.telefono, Validators.required],
      correoElectronico: [this.hotel.correoElectronico, [Validators.required, Validators.email]],
      sitioWeb: [this.hotel.sitioWeb, Validators.required]
    });
  }

  get control() {
    return this.formGroup.controls;
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.actualizar();
  }

  actualizar() {
    this.hotel = this.formGroup.value;
    this.hotelService.put(this.hotel).subscribe(h => {
        this.hotel = h;
    });
    const messageBox = this.modalService.open(AlertModalComponent)
    messageBox.componentInstance.title = "Resultado Operación";
    messageBox.componentInstance.message = 'Sus datos se han actulizado correctamente';
  }
}
