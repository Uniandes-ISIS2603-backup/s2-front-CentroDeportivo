import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementoListComponent } from './implemento-list.component';

describe('ImplementoListComponent', () => {
  let component: ImplementoListComponent;
  let fixture: ComponentFixture<ImplementoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
