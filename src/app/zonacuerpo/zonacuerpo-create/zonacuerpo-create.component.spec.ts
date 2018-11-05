import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonacuerpoCreateComponent } from './zonacuerpo-create.component';

describe('ZonacuerpoCreateComponent', () => {
  let component: ZonacuerpoCreateComponent;
  let fixture: ComponentFixture<ZonacuerpoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonacuerpoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonacuerpoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
