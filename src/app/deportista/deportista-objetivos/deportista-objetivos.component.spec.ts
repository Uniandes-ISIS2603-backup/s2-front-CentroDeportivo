import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportistaObjetivosComponent } from './deportista-objetivos.component';

describe('DeportistaObjetivosComponent', () => {
  let component: DeportistaObjetivosComponent;
  let fixture: ComponentFixture<DeportistaObjetivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeportistaObjetivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportistaObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
