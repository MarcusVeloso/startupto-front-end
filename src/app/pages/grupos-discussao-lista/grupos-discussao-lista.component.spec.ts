import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposDiscussaoListaComponent } from './grupos-discussao-lista.component';

describe('GruposDiscussaoListaComponent', () => {
  let component: GruposDiscussaoListaComponent;
  let fixture: ComponentFixture<GruposDiscussaoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposDiscussaoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposDiscussaoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
