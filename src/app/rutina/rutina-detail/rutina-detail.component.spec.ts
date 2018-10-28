import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaDetailComponent } from './rutina-detail.component';

describe('RutinaDetailComponent', () => {
  let component: RutinaDetailComponent;
  let fixture: ComponentFixture<RutinaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
