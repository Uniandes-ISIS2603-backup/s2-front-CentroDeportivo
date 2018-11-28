import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaEditComponent } from './rutina-edit.component';

describe('RutinaEditComponent', () => {
  let component: RutinaEditComponent;
  let fixture: ComponentFixture<RutinaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
