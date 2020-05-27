import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteRegistroComponent } from './transporte-registro.component';

describe('TransporteRegistroComponent', () => {
  let component: TransporteRegistroComponent;
  let fixture: ComponentFixture<TransporteRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransporteRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporteRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
