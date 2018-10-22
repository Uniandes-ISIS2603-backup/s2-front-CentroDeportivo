import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonacuerpoListComponent } from './zonacuerpo-list.component';

describe('ZonacuerpoListComponent', () => {
  let component: ZonacuerpoListComponent;
  let fixture: ComponentFixture<ZonacuerpoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonacuerpoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonacuerpoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
