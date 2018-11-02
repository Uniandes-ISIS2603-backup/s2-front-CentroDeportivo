import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoDetailComponent } from './objetivo-detail.component';

describe('ObjetivoDetailComponent', () => {
  let component: ObjetivoDetailComponent;
  let fixture: ComponentFixture<ObjetivoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
