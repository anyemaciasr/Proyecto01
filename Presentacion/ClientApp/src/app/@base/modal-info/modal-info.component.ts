import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {

  constructor(public activeModal:NgbModal) { }
  @Input() titulo;
  @Input() imagen;
  @Input() mensaje;
  ngOnInit(): void {
  }

}
