import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasListaComponent } from './noticias-lista.component';

describe('NoticiasListaComponent', () => {
  let component: NoticiasListaComponent;
  let fixture: ComponentFixture<NoticiasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
