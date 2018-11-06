import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistaCreateComponent } from './especialista-create.component';

describe('EspecialistaCreateComponent', () => {
  let component: EspecialistaCreateComponent;
  let fixture: ComponentFixture<EspecialistaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialistaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
