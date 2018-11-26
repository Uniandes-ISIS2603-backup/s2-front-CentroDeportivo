import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoEditComponent } from './objetivo-edit.component';

describe('ObjetivoEditComponent', () => {
  let component: ObjetivoEditComponent;
  let fixture: ComponentFixture<ObjetivoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
