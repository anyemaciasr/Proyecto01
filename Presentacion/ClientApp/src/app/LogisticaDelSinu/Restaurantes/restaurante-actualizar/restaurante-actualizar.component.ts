import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Restaurante } from '../../Models/restaurante';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-restaurante-actualizar',
  templateUrl: './restaurante-actualizar.component.html',
  styleUrls: ['./restaurante-actualizar.component.css']
})
export class RestauranteActualizarComponent implements OnInit {
  formGroup: FormGroup;
  restaurante:Restaurante;
  nit = this.rutaActiva.snapshot.params.identificacion;
  constructor(private restauranteServices: RestaurantesService, private formBuilder: FormBuilder, private rutaActiva:ActivatedRoute, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.restauranteServices.get(this.nit).subscribe(r => {
      this.restaurante = r;
      alert(this.restaurante.nit);
    })
    this.buildForm();
  }
  private buildForm() {
    this.restaurante= new Restaurante();
    this.restaurante.nit = "";
    this.restaurante.nombre = "";
    this.restaurante.pais = "";
    this.restaurante.ciudad = "";
    this.restaurante.direccion = "";
    this.restaurante.barrio = "";
    this.restaurante.telefono = "";
    this.restaurante.correoElectronico = "";
    this.restaurante.sitioWeb = "";
    this.formGroup = this.formBuilder.group({
      nit: [this.restaurante.nit, Validators.required],
      nombre: [this.restaurante.nombre, Validators.required],
      pais: [this.restaurante.pais, Validators.required],
      ciudad: [this.restaurante.ciudad, Validators.required],
      direccion: [this.restaurante.direccion, Validators.required],
      barrio: [this.restaurante.barrio, Validators.required],
      telefono: [this.restaurante.telefono, Validators.required],
      correoElectronico: [this.restaurante.correoElectronico, [Validators.required, Validators.email]],
      sitioWeb: [this.restaurante.sitioWeb, Validators.required]
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
    this.restaurante = this.formGroup.value;
    this.restauranteServices.put(this.restaurante).subscribe(r => {
      this.restaurante = r;
    });
    const messageBox = this.modalService.open(AlertModalComponent)
    messageBox.componentInstance.title = "Resultado Operación";
    messageBox.componentInstance.message = 'Sus datos se han actulizado correctamente';
  }
}
