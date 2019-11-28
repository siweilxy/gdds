import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblGlddsCltsubCfgComponent } from './tbl-gldds-cltsub-cfg.component';

describe('TblGlddsCltsubCfgComponent', () => {
  let component: TblGlddsCltsubCfgComponent;
  let fixture: ComponentFixture<TblGlddsCltsubCfgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblGlddsCltsubCfgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblGlddsCltsubCfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
