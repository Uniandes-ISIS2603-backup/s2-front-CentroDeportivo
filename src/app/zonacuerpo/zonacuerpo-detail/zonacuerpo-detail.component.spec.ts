import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonacuerpoDetailComponent } from './zonacuerpo-detail.component';

describe('ZonacuerpoDetailComponent', () => {
  let component: ZonacuerpoDetailComponent;
  let fixture: ComponentFixture<ZonacuerpoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonacuerpoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonacuerpoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
