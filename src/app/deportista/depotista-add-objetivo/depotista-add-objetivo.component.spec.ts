import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotistaAddObjetivoComponent } from './depotista-add-objetivo.component';

describe('DepotistaAddObjetivoComponent', () => {
  let component: DepotistaAddObjetivoComponent;
  let fixture: ComponentFixture<DepotistaAddObjetivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotistaAddObjetivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotistaAddObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
