import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoListComponent } from './objetivo-list.component';

describe('ObjetivoListComponent', () => {
  let component: ObjetivoListComponent;
  let fixture: ComponentFixture<ObjetivoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
