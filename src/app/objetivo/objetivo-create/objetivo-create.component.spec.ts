import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoCreateComponent } from './objetivo-create.component';

describe('ObjetivoCreateComponent', () => {
  let component: ObjetivoCreateComponent;
  let fixture: ComponentFixture<ObjetivoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
