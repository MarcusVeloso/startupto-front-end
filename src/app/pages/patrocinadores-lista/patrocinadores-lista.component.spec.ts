import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinadoresListaComponent } from './patrocinadores-lista.component';

describe('PatrocinadoresListaComponent', () => {
  let component: PatrocinadoresListaComponent;
  let fixture: ComponentFixture<PatrocinadoresListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrocinadoresListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrocinadoresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
