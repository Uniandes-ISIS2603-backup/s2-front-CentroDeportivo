import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonacuerpoEditComponent } from './zonacuerpo-edit.component';

describe('ZonacuerpoEditComponent', () => {
  let component: ZonacuerpoEditComponent;
  let fixture: ComponentFixture<ZonacuerpoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonacuerpoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonacuerpoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
