import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioZonacuerposComponent } from './ejercicio-zonacuerpos.component';

describe('EjercicioZonacuerposComponent', () => {
  let component: EjercicioZonacuerposComponent;
  let fixture: ComponentFixture<EjercicioZonacuerposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioZonacuerposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioZonacuerposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
