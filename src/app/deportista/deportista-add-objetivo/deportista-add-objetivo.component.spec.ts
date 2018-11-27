import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportistaAddObjetivoComponent } from './deportista-add-objetivo.component';

describe('DeportistaAddObjetivoComponent', () => {
  let component: DeportistaAddObjetivoComponent;
  let fixture: ComponentFixture<DeportistaAddObjetivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeportistaAddObjetivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportistaAddObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
