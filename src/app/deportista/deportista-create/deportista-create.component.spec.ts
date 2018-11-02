import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportistaCreateComponent } from './deportista-create.component';

describe('DeportistaCreateComponent', () => {
  let component: DeportistaCreateComponent;
  let fixture: ComponentFixture<DeportistaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeportistaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportistaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
