import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasporteActualizarComponent } from './trasporte-actualizar.component';

describe('TrasporteActualizarComponent', () => {
  let component: TrasporteActualizarComponent;
  let fixture: ComponentFixture<TrasporteActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasporteActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasporteActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
