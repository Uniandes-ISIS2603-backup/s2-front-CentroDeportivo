import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoModuleListComponent } from './objetivo-module-list.component';

describe('ObjetivoModuleListComponent', () => {
  let component: ObjetivoModuleListComponent;
  let fixture: ComponentFixture<ObjetivoModuleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivoModuleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivoModuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
