import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportistaDetailComponent } from './deportista-detail.component';

describe('DeportistaDetailComponent', () => {
  let component: DeportistaDetailComponent;
  let fixture: ComponentFixture<DeportistaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeportistaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportistaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
