import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportistaDetailComponent } from './deportista-detail.component';

describe('DeportistaDetailComponent', () => {
  let component: DeportistaDetailComponent;
  let fixture: ComponentFixture<DeportistaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeportistaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportistaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





























p class="h3 p-3">Nombre: {{deportistaDetail.nombre}}</p>
        <p class="h3 p-3">Género: {{deportistaDetail.sexo}}</p>
        <p class="h3 p-3">Altura: {{deportistaDetail.altura}}</p>
        <p class="h3 p-3">Presión sanguínea: {{deportistaDetail.presionSanguinea}}</p>
        <p class="h3 p-3">Peso: {{deportistaDetail.peso}}</p>
        <p class="h3 p-3">Ritmo cardiaco: {{deportistaDetail.ritmoCardiaco}}</p>
        <p class="h3 p-3">Medida piernas: {{deportistaDetail.medidaPiernas}}</p>
        <p class="h3 p-3">Medida cintura: {{deportistaDetail.medidaCintura}}</p>
        <p class="h3 p-3">Medida brazos: {{deportistaDetail.medidaBrazos}}</p>
        <p class="h3 p-3">Cédula: {{deportistaDetail.cedula}}</p>
        <p class="h3 p-3">Fecha de nacimiento: {{deportistaDetail.fechaNacimiento}}</p>