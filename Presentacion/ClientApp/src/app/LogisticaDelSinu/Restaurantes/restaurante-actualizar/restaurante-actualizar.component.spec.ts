import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteActualizarComponent } from './restaurante-actualizar.component';

describe('RestauranteActualizarComponent', () => {
  let component: RestauranteActualizarComponent;
  let fixture: ComponentFixture<RestauranteActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
