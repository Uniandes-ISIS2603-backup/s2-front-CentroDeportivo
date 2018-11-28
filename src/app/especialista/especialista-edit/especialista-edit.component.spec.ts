import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistaEditComponent } from './especialista-edit.component';

describe('EspecialistaEditComponent', () => {
  let component: EspecialistaEditComponent;
  let fixture: ComponentFixture<EspecialistaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialistaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
