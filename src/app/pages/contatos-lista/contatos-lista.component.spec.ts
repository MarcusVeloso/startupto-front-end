import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosListaComponent } from './contatos-lista.component';

describe('ContatosListaComponent', () => {
  let component: ContatosListaComponent;
  let fixture: ComponentFixture<ContatosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
