import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaHotelComponent } from './consulta-hotel.component';

describe('ConsultaHotelComponent', () => {
  let component: ConsultaHotelComponent;
  let fixture: ComponentFixture<ConsultaHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
