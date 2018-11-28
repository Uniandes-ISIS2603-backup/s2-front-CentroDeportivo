import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioAddZonacuerposComponent } from './ejercicio-add-zonacuerpos.component';

describe('EjercicioAddZonacuerposComponent', () => {
  let component: EjercicioAddZonacuerposComponent;
  let fixture: ComponentFixture<EjercicioAddZonacuerposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioAddZonacuerposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioAddZonacuerposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
