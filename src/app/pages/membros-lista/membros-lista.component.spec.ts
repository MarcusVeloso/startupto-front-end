import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosListaComponent } from './membros-lista.component';

describe('MembrosListaComponent', () => {
  let component: MembrosListaComponent;
  let fixture: ComponentFixture<MembrosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembrosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembrosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
