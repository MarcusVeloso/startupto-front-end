import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoiadoresListaComponent } from './apoiadores-lista.component';

describe('ApoiadoresListaComponent', () => {
  let component: ApoiadoresListaComponent;
  let fixture: ComponentFixture<ApoiadoresListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoiadoresListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoiadoresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
