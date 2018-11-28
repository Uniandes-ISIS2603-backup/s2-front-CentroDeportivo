import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementoEditComponent } from './implemento-edit.component';

describe('ImplementoEditComponent', () => {
  let component: ImplementoEditComponent;
  let fixture: ComponentFixture<ImplementoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
