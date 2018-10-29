import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementoDetailComponent } from './implemento-detail.component';

describe('ImplementoDetailComponent', () => {
  let component: ImplementoDetailComponent;
  let fixture: ComponentFixture<ImplementoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
