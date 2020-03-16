import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDownloadListaComponent } from './material-download-lista.component';

describe('MaterialDownloadListaComponent', () => {
  let component: MaterialDownloadListaComponent;
  let fixture: ComponentFixture<MaterialDownloadListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDownloadListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDownloadListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
