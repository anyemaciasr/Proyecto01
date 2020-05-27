import { Component } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  providers: [NgbAccordionConfig]
})
export class NavMenuComponent {
  isExpanded = false;
  show:boolean=false;
  show2:boolean=false;
  show3:boolean=false;
  show4:boolean=false;
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
