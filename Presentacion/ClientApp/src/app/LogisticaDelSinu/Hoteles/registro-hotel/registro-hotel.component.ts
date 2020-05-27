import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Hotel } from '../../Models/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-registro-hotel',
  templateUrl: './registro-hotel.component.html',
  styleUrls: ['./registro-hotel.component.css']
})
export class RegistroHotelComponent implements OnInit {

  formGroup: FormGroup;
  hotel:Hotel;

  constructor(private hotelService: HotelService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
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
    this.registrar();
  }

  registrar() {
    this.hotel = this.formGroup.value;
    this.hotelService.post(this.hotel).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Hotel creado!!!';
        this.hotel = p;
      }
    });
  }
}
