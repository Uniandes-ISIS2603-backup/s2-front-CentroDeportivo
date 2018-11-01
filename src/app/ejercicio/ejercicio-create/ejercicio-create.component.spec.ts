import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioCreateComponent } from './ejercicio-create.component';

describe('EjercicioCreateComponent', () => {
  let component: EjercicioCreateComponent;
  let fixture: ComponentFixture<EjercicioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
