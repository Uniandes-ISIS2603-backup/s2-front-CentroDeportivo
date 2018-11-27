import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportistaEditComponent } from './deportista-edit.component';

describe('DeportistaEditComponent', () => {
  let component: DeportistaEditComponent;
  let fixture: ComponentFixture<DeportistaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeportistaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportistaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
