import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistaDetailComponent } from './especialista-detail.component';

describe('EspecialistaDetailComponent', () => {
  let component: EspecialistaDetailComponent;
  let fixture: ComponentFixture<EspecialistaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialistaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
