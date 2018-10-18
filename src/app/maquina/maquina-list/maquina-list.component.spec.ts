import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaListComponent } from './maquina-list.component';

describe('MaquinaListComponent', () => {
  let component: MaquinaListComponent;
  let fixture: ComponentFixture<MaquinaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
