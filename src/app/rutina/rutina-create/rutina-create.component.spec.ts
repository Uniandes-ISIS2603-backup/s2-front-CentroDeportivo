import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaCreateComponent } from './rutina-create.component';

describe('RutinaCreateComponent', () => {
  let component: RutinaCreateComponent;
  let fixture: ComponentFixture<RutinaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
