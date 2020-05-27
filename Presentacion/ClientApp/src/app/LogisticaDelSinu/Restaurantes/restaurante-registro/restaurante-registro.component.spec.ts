import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteRegistroComponent } from './restaurante-registro.component';

describe('RestauranteRegistroComponent', () => {
  let component: RestauranteRegistroComponent;
  let fixture: ComponentFixture<RestauranteRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
