import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransporteService } from 'src/app/services/transporte.service';
import { Transporte } from '../../Models/transporte';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trasporte-actualizar',
  templateUrl: './trasporte-actualizar.component.html',
  styleUrls: ['./trasporte-actualizar.component.css']
})
export class TrasporteActualizarComponent implements OnInit {
  formGroup: FormGroup;
  transporte:Transporte;
  nit = this.rutaActiva.snapshot.params.identificacion;
  constructor(private transporteServices: TransporteService, private formBuilder: FormBuilder, private rutaActiva:ActivatedRoute, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.transporteServices.get(this.nit).subscribe(r => {
      this.transporte = r;
      alert(this.transporte.nit);
    })
    this.buildForm();
  }
  private buildForm() {
    this.transporte= new Transporte();
    this.transporte.nit = "";
    this.transporte.nombre = "";
    this.transporte.pais = "";
    this.transporte.ciudad = "";
    this.transporte.direccion = "";
    this.transporte.barrio = "";
    this.transporte.telefono = "";
    this.transporte.correoElectronico = "";
    this.transporte.sitioWeb = "";
    this.formGroup = this.formBuilder.group({
      nit: [this.transporte.nit, Validators.required],
      nombre: [this.transporte.nombre, Validators.required],
      pais: [this.transporte.pais, Validators.required],
      ciudad: [this.transporte.ciudad, Validators.required],
      direccion: [this.transporte.direccion, Validators.required],
      barrio: [this.transporte.barrio, Validators.required],
      telefono: [this.transporte.telefono, Validators.required],
      correoElectronico: [this.transporte.correoElectronico, [Validators.required, Validators.email]],
      sitioWeb: [this.transporte.sitioWeb, Validators.required]
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
    this.transporte = this.formGroup.value;
    this.transporteServices.put(this.transporte).subscribe(t => {

    });
    const messageBox = this.modalService.open(AlertModalComponent)
    messageBox.componentInstance.title = "Resultado Operación";
    messageBox.componentInstance.message = 'Sus datos se han actulizado correctamente';
  }

}
