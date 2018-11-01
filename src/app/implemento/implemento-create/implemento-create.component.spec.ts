import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementoCreateComponent } from './implemento-create.component';

describe('ImplementoCreateComponent', () => {
  let component: ImplementoCreateComponent;
  let fixture: ComponentFixture<ImplementoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
