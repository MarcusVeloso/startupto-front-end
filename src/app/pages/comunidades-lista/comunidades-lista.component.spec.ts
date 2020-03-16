import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadesListaComponent } from './comunidades-lista.component';

describe('ComunidadesListaComponent', () => {
  let component: ComunidadesListaComponent;
  let fixture: ComponentFixture<ComunidadesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
