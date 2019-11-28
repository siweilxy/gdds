import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblGlddsCltpubCfgComponent } from './tbl-gldds-cltpub-cfg.component';

describe('TblGlddsCltpubCfgComponent', () => {
  let component: TblGlddsCltpubCfgComponent;
  let fixture: ComponentFixture<TblGlddsCltpubCfgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblGlddsCltpubCfgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblGlddsCltpubCfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
