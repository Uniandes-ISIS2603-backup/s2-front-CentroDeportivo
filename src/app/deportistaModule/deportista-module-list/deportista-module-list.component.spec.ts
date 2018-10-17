import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportistaModuleListComponent } from './deportista-module-list.component';

describe('DeportistaModuleListComponent', () => {
  let component: DeportistaModuleListComponent;
  let fixture: ComponentFixture<DeportistaModuleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeportistaModuleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportistaModuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
