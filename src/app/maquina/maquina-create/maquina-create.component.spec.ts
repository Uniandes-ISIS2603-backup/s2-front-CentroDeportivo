import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaCreateComponent } from './maquina-create.component';

describe('MaquinaCreateComponent', () => {
  let component: MaquinaCreateComponent;
  let fixture: ComponentFixture<MaquinaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
