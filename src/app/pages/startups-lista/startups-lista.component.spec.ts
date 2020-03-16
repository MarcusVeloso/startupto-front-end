import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupsListaComponent } from './startups-lista.component';

describe('StartupsListaComponent', () => {
  let component: StartupsListaComponent;
  let fixture: ComponentFixture<StartupsListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupsListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
